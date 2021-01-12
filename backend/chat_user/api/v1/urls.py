from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from rest_framework.routers import DefaultRouter

from .viewsets import ChatViewSet, ThreadViewSet

router = DefaultRouter()
router.register('chat',     ChatViewSet)
router.register('thread', ThreadViewSet)

urlpatterns = [
    path("", include(router.urls))
]
