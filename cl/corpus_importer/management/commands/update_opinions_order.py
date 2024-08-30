import argparse
import re
import time
from typing import Any, List

from bs4 import BeautifulSoup
from django.db import transaction
from django.db.models import Count

from cl.lib.command_utils import VerboseCommand, logger
from cl.search.models import SOURCES, Opinion, OpinionCluster

VALID_COLUMBIA_SOURCES = [
    key
    for key in dict(SOURCES.NAMES).keys()
    if SOURCES.COLUMBIA_ARCHIVE in key
]


def sort_harvard_opinions(options: dict) -> None:
    """Sort harvard opinions

    We assume that harvard data is already ordered, we just need to fill
    the order field in each opinion

    The harvard importer created the opinions in order of appearance in the file

    :param options: dict of arguments passed to the command
    :return: None
    """

    skip_until = options.get("skip_until", None)
    limit = options.get("limit", None)

    # The filepath_json_harvard field can only be filled by the harvard importer,
    # this helps us confirm that it was imported from a Harvard json. We exclude
    # clusters merged with columbia because those may need some extra verification
    harvard_clusters = (
        OpinionCluster.objects.exclude(filepath_json_harvard="")
        .prefetch_related("sub_opinions")
        .annotate(opinions_count=Count("sub_opinions"))
        .filter(opinions_count__gt=1)
        .exclude(source__contains=SOURCES.COLUMBIA_ARCHIVE)
        .order_by("id")
    )
    if skip_until:
        harvard_clusters = harvard_clusters.filter(pk__gte=skip_until)

    if limit:
        harvard_clusters = harvard_clusters[:limit]

    logger.info(f"Harvard clusters to process: {harvard_clusters.count()}")

    completed = 0
    for cluster in harvard_clusters:
        logger.info(f"Processing cluster id: {cluster}")
        opinion_order = 1
        any_update = False
        with transaction.atomic():
            # We need to make sure they are ordered by id
            for cluster_op in cluster.sub_opinions.all().order_by("id"):
                if cluster_op.type == Opinion.COMBINED:
                    continue
                cluster_op.ordering_key = opinion_order
                cluster_op.save()
                opinion_order = opinion_order + 1
                any_update = True
            if not any_update:
                # We want to know if you found anything unexpected, like for example
                # only having combined opinions
                logger.info(
                    f"No sub_opinions updated for cluster id: {cluster}"
                )
                continue
            logger.info(
                msg=f"Harvard opinions reordered for cluster id: {cluster.id}"
            )
            completed += 1
            # Wait between each processed cluster to avoid issues with elastic
            time.sleep(options["delay"])

    logger.info(f"Processed Harvard clusters: {completed}")


def get_xml(filepath: str) -> str:
    """Get cleaned columbia content to compare opinions against

    :param filepath: the filepath
    :return: the opinion text cleaned up
    """
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    columbia_xml = BeautifulSoup(content, "html.parser")
    clean_columbia_text = re.sub(r"[^a-zA-Z0-9\s]+", " ", columbia_xml.text)
    clean_columbia_text = re.sub(r"\s+", " ", clean_columbia_text)
    return clean_columbia_text


def generate_ngrams(words: List[str]) -> List[List[str]]:
    """Generate n-grams based on the length of the word list.

    Pass in a list of words in an opinion and divide it up into n-grams
    based on the length of it.  for small opinions look for bigrams or
    single unique words

    :param words: a list of words obtained splitting the opinion
    :return: n-grams
    """
    if len(words) <= 5:
        return [[x] for x in words]
    elif 5 < len(words) < 25:
        return [words[i : i + 2] for i in range(len(words) - 1)]
    else:
        return [words[i : i + 5] for i in range(len(words) - 4)]


def match_text(opinions: List[Any], xml_dir: str) -> List[List[Any]]:
    """Identify a unique set of text in opinions to identify order of opinions

    In a small subset of opinions, duplicate text or bad data fails and assign
    the end of the index.  These opinions are usually short dissents that we
    add to be the back of the order.

    :param opinions: Opinions to sort
    :param xml_dir: Path to directory of the xml files
    :return: Ordered opinion list
    """
    local_path = opinions[0][-1]
    filepath = local_path.replace("/home/mlissner/columbia/opinions", xml_dir)

    columbia_words = get_xml(filepath=filepath)
    matches = []

    for opinion in opinions:
        # assign back up index to the end of the opinion
        match_index = len(columbia_words)
        soup = BeautifulSoup(opinion[2], "html.parser")
        words = re.findall(r"\b\w+\b", soup.text)
        ngrams_to_check = generate_ngrams(words)

        # Check for unique matches in columbia_text
        for word_group in ngrams_to_check:
            phrase = " ".join(word_group)
            if columbia_words.count(phrase) == 1:
                # Found a match - break the check
                match_index = columbia_words.find(phrase)
                break
        matches.append([opinion[0], opinion[1], match_index])
    ordered_opinions = sorted(matches, key=lambda x: x[-1])
    return ordered_opinions


def sort_columbia_opinions(options: dict) -> None:
    """Update opinion ordering for columbia clusters

    :param options: dict of arguments passed to the command
    :return: None
    """
    xml_dir = options["xml_dir"]
    skip_until = options.get("skip_until", None)
    clusters = (
        OpinionCluster.objects.filter(
            source__contains=SOURCES.COLUMBIA_ARCHIVE
        )
        .order_by("id")
        .values_list("id", flat=True)
    )
    if skip_until is not None:
        clusters = clusters.filter(id__gt=skip_until)

    completed = 0
    logger.info(f"Columbia clusters to process: {clusters.count()}")
    for cluster_id in clusters:
        logger.info(f"Starting opinion cluster: {cluster_id}")
        opinions = (
            Opinion.objects.filter(cluster=cluster_id)
            .exclude(local_path="")
            .values_list("id", "type", "html_columbia", "local_path")
        )
        op_types = [op[1] for op in opinions]
        if len(opinions) < 2:
            # less than two opinions ... easy peasy
            logger.info(f"Skipping opinion cluster with only one opinion.")
            continue
        elif (
            len(op_types) == 2
            and Opinion.LEAD in op_types
            and len(set(op_types)) == 2
        ):
            # If only two opinions and one is the lead - assign it to the number 1
            logger.info(f"Sorting opinions with 1 Lead Opinion.")
            opinions = [op[:2] for op in opinions]
            ordered_opinions = sorted(opinions, key=lambda fields: fields[1])
        else:
            logger.info(f"Sorting order by location.")
            ordered_opinions = match_text(opinions, xml_dir)

        order_key = 1
        for op in ordered_opinions:
            opinion_obj = Opinion.objects.get(id=op[0])
            opinion_obj.ordering_key = order_key
            opinion_obj.save()
            order_key += 1

        completed += 1

        logger.info(f"Opinion Cluster Saved.")

        # Wait between each processed cluster to avoid issues with elastic
        time.sleep(options["delay"])

    logger.info(f"Processed Columbia clusters: {completed}")


class Command(VerboseCommand):
    help = "Add ordering Key for sub opinions"

    def __init__(self, *args, **kwargs):
        super(Command, self).__init__(*args, **kwargs)

    def valid_actions(self, s):
        if s.lower() not in self.VALID_ACTIONS:
            raise argparse.ArgumentTypeError(
                "Unable to parse action. Valid actions are: %s"
                % (", ".join(self.VALID_ACTIONS.keys()))
            )

        return self.VALID_ACTIONS[s]

    def add_arguments(self, parser):
        parser.add_argument(
            "--skip-until",
            help="Specific cluster id to skip until",
            type=int,
            required=False,
        )
        parser.add_argument(
            "--limit",
            type=int,
            help="Number of files to sort",
            required=False,
        )
        parser.add_argument(
            "--action",
            type=self.valid_actions,
            required=True,
            help="The action you wish to take. Valid choices are: %s"
            % (", ".join(self.VALID_ACTIONS.keys())),
        )
        parser.add_argument(
            "--delay",
            type=float,
            default=0.1,
            help="How long to wait to update each opinion (in seconds, allows "
            "floating numbers).",
        )
        parser.add_argument(
            "--xml-dir",
            default="/opt/courtlistener/columbia/usb",
            required=False,
            help="The absolute path to the directory with columbia xml files",
        )

    def handle(self, *args, **options):
        super().handle(*args, **options)
        options["action"](options)

    VALID_ACTIONS = {
        "sort-harvard": sort_harvard_opinions,
        "sort-columbia": sort_columbia_opinions,
    }
