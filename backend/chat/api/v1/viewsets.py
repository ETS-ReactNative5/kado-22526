from django.shortcuts import get_object_or_404
from rest_framework import authentication, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from chat.models import Thread, Message

from .serializers import (
    MessageSerializer, ThreadSerializer
)


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
        # authentication.SessionAuthentication,
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
        queryset = Thread.objects.filter(thread_member__profile=profile)
        thread = get_object_or_404(queryset, pk=pk)
        thread.thread_member.filter(profile_id=profile.id).update(unread=False)
        serializer = ThreadSerializer(thread)

        return Response(serializer.data)
