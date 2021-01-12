from rest_framework import serializers
from django.http import HttpRequest
from django.apps import apps
from django.utils.translation import ugettext_lazy as _
from django.db import transaction

from chat_user.models import Thread, Message

Profile = apps.get_model(app_label='profile', model_name='Profile')


class MessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_sender_username')
    thread_id = serializers.IntegerField(required=False, )
    to_profile_ids = serializers.ListField(required=False, )

    class Meta:
        model = Message
        fields = ['thread_id', "content", "attachment", "username", "sent_at", "to_profile_ids"]

    def get_thread_id(self, obj):
        return obj.id

    def get_to_profile_ids(self, obj):
        return [profile.id for profile in obj.thread.profiles.all()]

    def get_sender_username(self, obj):
        return obj.sender.fullname()

    def get_thread(self, obj):
        return getattr(obj, 'thread', None)

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    @transaction.atomic
    def create(self, validated_data):
        user = self._get_request().user
        profile = user.profile if hasattr(user, 'profile') else Profile.objects.create(user=user)
        subject = 'DEFAULT SUBJECT'
        thread_id = validated_data.get('thread_id')
        thread = None
        if thread_id:
            thread_qs = Thread.objects.filter(id=thread_id)
            if thread_qs.exists():
                thread = thread_qs.first()
        if thread:
            msg = Message.new_reply(
                profile=profile,
                thread=thread,
                content=validated_data.get('content', '')
            )
        else:
            if len(validated_data.get('to_profile_ids', [])) == 0:
                raise serializers.ValidationError(
                    _("Recipients (to_profile_ids), profile ids.")
                )
            msg = Message.new_message(
                profile,
                to_profiles=validated_data.get('to_profile_ids'),
                subject=subject,
                content=validated_data.get('content', '')
            )
        return msg


class ThreadSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Thread
        fields = ["subject", "messages"]

    def get_messages(self, obj):
        return Thread.objects.all()

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request
