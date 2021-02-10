import logging
from rest_framework import authentication, viewsets, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils.translation import ugettext_lazy as _

from chat_user.models import Thread, Message
from chat_profile.models import Profile

from .serializers import (
    MessageSerializer, ThreadSerializer, ThreadInboxSerializer
)

logger = logging.getLogger(__name__)


class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    authentication_classes = (
        # authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()


class ThreadInboxViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadInboxSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
    )
    permission_classes = [IsAuthenticated, ]
    queryset = Thread.objects.all()

    def get_queryset(self):
        user = self.request.user
        search_query = self.request.query_params.get('q')
        profile = user.profile if hasattr(user, 'profile') else Profile.objects.create(user=user)
        queryset = Thread.ordered(Thread.inbox(profile, search_query))
        return queryset


class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    permission_classes = [IsAuthenticated]
    search_fields = ['q']
    queryset = Thread.objects.all()

    def get_queryset(self):
        user = self.request.user
        search_query = self.request.query_params.get('q')
        profile = user.profile if hasattr(user, 'profile') else Profile.objects.create(user=user)
        queryset = Thread.ordered(Thread.inbox(profile, search_query))
        return queryset

    def get_object(self):
        user = self.request.user
        filters = dict()
        filters['pk'] = self.kwargs['pk']

        profile = user.profile
        queryset = Thread.objects.filter(profiles__id__in=[profile.id])
        thread = queryset.filter(**filters).first()
        self.check_object_permissions(self.request, thread)
        if thread:
            thread.thread_member.filter(profile_id=profile.id).update(unread=False)
            return thread
        raise serializers.ValidationError(
            {"errors": _("Thread not found.")}
        )
