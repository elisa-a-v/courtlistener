# Solr fields that are used for highlighting or other output in the search results
import re

SOLR_OPINION_HL_FIELDS = [
    "caseName",
    "citation",
    "court_citation_string",
    "docketNumber",
    "judge",
    "lexisCite",
    "neutralCite",
    "suitNature",
    "text",
]
SEARCH_RECAP_HL_FIELDS = [
    "assignedTo",
    "assignedTo.exact",
    "caseName",
    "caseName.exact",
    "cause",
    "cause.exact",
    "court_citation_string",
    "docketNumber",
    "docketNumber.exact",
    "juryDemand",
    "juryDemand.exact",
    "referredTo",
    "referredTo.exact",
    "short_description",
    "suitNature",
    "suitNature.exact",
    "text",
]
SEARCH_RECAP_CHILD_HL_FIELDS = [
    "short_description",
    "short_description.exact",
    "description",
    "description.exact",
    "document_type",
    "document_type.exact",
    "document_number",
    "attachment_number",
]
SEARCH_ORAL_ARGUMENT_HL_FIELDS = [
    "text",
    "caseName",
    "judge",
    "docketNumber",
    "court_citation_string",
]
SEARCH_ORAL_ARGUMENT_ES_HL_FIELDS = [
    "caseName",
    "caseName.exact",
    "judge",
    "judge.exact",
    "docketNumber",
    "docketNumber.exact",
    "court_citation_string",
    "text",
    "text.exact",
]
SEARCH_ALERTS_ORAL_ARGUMENT_ES_HL_FIELDS = [
    "text",
    "text.exact",
    "docketNumber",
    "docketNumber.exact",
    "judge",
    "judge.exact",
]
SOLR_PEOPLE_HL_FIELDS = ["name", "dob_city", "dob_state", "name_reverse"]
SOLR_PEOPLE_ES_HL_FIELDS = [
    "name",
    "name.exact",
    "dob_city",
    "dob_state_id",
    "text",
    "text.exact",
]
SEARCH_HL_TAG = "mark"
ALERTS_HL_TAG = "strong"


# Search query for related items
RELATED_PATTERN = re.compile(
    r"""
    (^|\s)                      # beginning of string or whitespace
    (?P<pfx>related:            # "related:" query prefix
        (?P<pks>(               # find related items for these IDs
            ([0-9]+)(,[0-9]+)*  # one or more integers (comma separated)
            )
        )
    )
    ($|\s)                      # end of string or whitespace
    """,
    re.VERBOSE,
)
