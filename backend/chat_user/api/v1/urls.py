from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .viewsets import ChatViewSet, ThreadViewSet

app_name = 'chat'
router = DefaultRouter()
router.register('chat',  ChatViewSet)
router.register('thread', ThreadViewSet)

urlpatterns = [
    path("", include(router.urls))
]
