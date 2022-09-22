from http import HTTPStatus
from typing import Callable

from django.conf import settings
from django.core.exceptions import MiddlewareNotUsed
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.utils.cache import add_never_cache_headers


class MaintenanceModeMiddleware:
    """Provides maintenance mode if requested in settings.

    This cribs heavily from:
      - https://github.com/fabiocaccamo/django-maintenance-mode

    But there are a few differences. First, we drop a lot of the functionality.
    For example, there's no distinction between staff and super users, there's
    no mechanism for enabling this by script or URL, etc.

    Second, we set this up so that it raises a MiddlewareNotUsed exception if
    maintenance mode is not enabled. Because this is in init instead of in the
    process_request method, it runs the logic once, when the code is
    initialized, instead of running it on every page request. This should make
    it (very slightly) faster.

    The third difference is that this provides is that it sets the maintenance
    mode page to never be cached.

    We also eschew using the code from Github to reduce our reliance on third-
    party code.
    """

    def __init__(self, get_response: Callable):
        if not settings.MAINTENANCE_MODE_ENABLED:
            raise MiddlewareNotUsed
        self.get_response = get_response

    def __call__(self, request: HttpRequest) -> HttpResponse:
        response = self.get_response(request)
        if hasattr(request, "user"):
            if settings.MAINTENANCE_MODE_ALLOW_STAFF and request.user.is_staff:
                return response

        r = render(
            request,
            "maintenance.html",
            {"private": True},
            status=HTTPStatus.SERVICE_UNAVAILABLE,
        )
        add_never_cache_headers(r)
        return r
