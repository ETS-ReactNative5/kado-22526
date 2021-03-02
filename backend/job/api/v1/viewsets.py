from rest_framework import viewsets, authentication
from rest_framework.views import APIView
from rest_framework.response import Response

from chat_profile.models import Profile
from job.models import Job, JobCategory
from job.enums import job_experience_level_options, job_category_options, job_type_options
from .serializers import JobSerializer, JobCategorySerializer


class JobCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = JobCategorySerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    queryset = JobCategory.objects.all()


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    queryset = Job.objects.all()

    def get_queryset(self):
        search_query = self.request.query_params.get('q', None)
        queryset = Job.search(search_query, params=self.request.query_params)
        return queryset


class JobSavedViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    queryset = Job.objects.all()

    def get_queryset(self):
        search_query = self.request.query_params.get('q', None)
        queryset = Job.search(self.request.query_params)
        user = self.request.user
        profile = user.profile if hasattr(user, 'profile') else Profile(user=user)
        return queryset.filter(favorites__id=profile.id)


class ListJobExperienceLevelOptionsView(APIView):
    """
    View to list all job experience level types in the system.

    * Requires token authentication.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        return Response(job_experience_level_options)


class ListJobCategoryOptionsOptionsView(APIView):
    """
    View to list all job category options in the system.

    * Requires token authentication.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        return Response(job_category_options)


class ListJobTypesOptionsView(APIView):
    """
    View to list all job types in the system.

    * Requires token authentication.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        return Response(job_type_options)
