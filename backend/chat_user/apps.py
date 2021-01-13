from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import gettext_lazy as _


class ChatConfig(BaseAppConfig):

    name = "chat"
    label = "chat"
    verbose_name = _("Messages")
