from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .viewsets import ThreadViewSet, ThreadInboxViewSet

app_name = 'chat'
router = DefaultRouter()
router.register('inbox', ThreadInboxViewSet)
router.register('thread', ThreadViewSet)

urlpatterns = [
    path("", include(router.urls))
]
