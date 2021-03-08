from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .viewsets import MediaViewSet, MediaAPIView

app_name = 'media'
router = DefaultRouter()
router.register('media', MediaViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("delete_media/<int:pk>/", MediaAPIView.as_view())
]
