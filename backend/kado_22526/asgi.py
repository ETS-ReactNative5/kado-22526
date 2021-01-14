"""
ASGI config for appdir project.

It exposes the ASGI callable as a module-level variable named ``application``.

"""

import os

import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kado_22526.settings")

django.setup()

application = get_default_application()
