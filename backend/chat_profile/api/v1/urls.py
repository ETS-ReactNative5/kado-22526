from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VerificationCodeViewSet, ProfileViewSet, ContactViewSet, ListProfileTypes, ListWorkTypes
)

router = DefaultRouter()
router.register("verificationcode", VerificationCodeViewSet)
router.register("profile", ProfileViewSet)
router.register("contact", ContactViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("profile_types/", ListProfileTypes.as_view()),
    path("work_types/", ListWorkTypes.as_view())
]
