from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    JobViewSet, JobSavedViewSet, ListJobCategoryOptionsOptionsView,
    ListJobExperienceLevelOptionsView, ListJobTypesOptionsView,
JobCategoryViewSet
)

app_name = 'job'
router = DefaultRouter()
router.register('job', JobViewSet)
router.register('category/job', JobCategoryViewSet)
router.register('saved/job', JobSavedViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("job_category_types", ListJobCategoryOptionsOptionsView.as_view()),
    path("job_experience_level", ListJobExperienceLevelOptionsView.as_view()),
    path("job_types", ListJobTypesOptionsView.as_view())
]
