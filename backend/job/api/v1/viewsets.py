from rest_framework import viewsets, authentication

from chat_profile.models import Profile
from job.models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    queryset = Job.objects.all()

    def get_queryset(self):
        search_query = self.request.query_params.get('q', None)
        queryset = Job.search(search_query)
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
        queryset = Job.search(search_query)
        user = self.request.user
        profile = user.profile if hasattr(user, 'profile') else Profile(user=user)
        return queryset.filter(favorites__id=profile.id)
