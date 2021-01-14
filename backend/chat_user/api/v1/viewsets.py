import logging
from rest_framework import authentication, viewsets, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils.translation import ugettext_lazy as _

from chat_user.models import Thread, Message
from chat_profile.models import Profile

from .serializers import (
    MessageSerializer, ThreadSerializer
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


class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    permission_classes = [IsAuthenticated]
    queryset = Thread.objects.all()

    def list(self, request):
        queryset = Thread.ordered(Thread.inbox(self.request.user)).distinct()
        serializer = ThreadSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = self.request.user
        profile = user.profile if hasattr(user, 'profile') else Profile.objects.create(user=user)
        queryset = Thread.objects.filter(profiles__id__in=[profile.id])
        thread = queryset.filter(pk=pk).first()
        if thread:
            thread.thread_member.filter(profile_id=profile.id).update(unread=False)
            serializer = ThreadSerializer(thread)

            return Response(serializer.data)
        raise serializers.ValidationError(
            _("Thread with id %s not found." % pk)
        )
