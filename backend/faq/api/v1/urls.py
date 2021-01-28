from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .viewsets import FAQViewSet

router = DefaultRouter()
router.register("faq", FAQViewSet)

urlpatterns = [
    path("", include(router.urls))
]
