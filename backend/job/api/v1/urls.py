from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JobViewSet, JobSavedViewSet

app_name = 'job'
router = DefaultRouter()
router.register('job', JobViewSet)
router.register('saved/job', JobSavedViewSet)

urlpatterns = [
    path("", include(router.urls))
]
