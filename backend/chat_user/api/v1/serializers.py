from rest_framework import serializers
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from django.utils.timesince import timesince
from django.db import transaction

from chat_user.models import Thread, Message
from chat_profile.models import Profile


class MessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_sender_username')
    thread_id = serializers.IntegerField(required=False, )
    to_profile_ids = serializers.ListField(required=False, )
    sender_id = serializers.IntegerField(required=False)

    class Meta:
        model = Message
        fields = [
            'sender_id',
            'thread_id',
            "content",
            "attachment",
            "username",
            "sent_at",
            "to_profile_ids",
        ]

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


class MessageThreadSerializer(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    createdAt = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()
    _id = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = ['_id', "text", "image", "createdAt", "user"]

    def get_text(self, instance):
        return instance.content

    def get_image(self, instance):
        return instance.attachment

    def get_createdAt(self, instance):
        return instance.sent_at

    def get__id(self, instance):
        return instance.id

    def get_user(self, instance):
        sender = instance.sender
        return {
            "_id": sender.id,
            "name": sender.fullname(),
            "avatar": sender.photo
        }


class ThreadSerializer(serializers.ModelSerializer):
    messages = MessageThreadSerializer(many=True, read_only=True)
    avatar = serializers.SerializerMethodField(read_only=True)
    fullname = serializers.SerializerMethodField()
    receiverProfileId = serializers.SerializerMethodField()

    class Meta:
        model = Thread
        fields = ["id", "avatar", "fullname", "receiverProfileId", "messages", ]

    def get_receiverProfileId(self, instance):
        profile_id = self._get_request().user.profile.id
        return instance.receiver_profiles(profile_id, True).id

    def get_fullname(self, obj):
        profile_id = self._get_request().user.profile.id
        return obj.receiver_profiles(profile_id, True).fullname()

    def get_avatar(self, obj):
        profile_id = self._get_request().user.profile.id
        return obj.receiver_profiles(profile_id, True).photo

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request


class ThreadInboxSerializer(serializers.ModelSerializer):
    desc = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    position = serializers.SerializerMethodField()
    title = serializers.SerializerMethodField()
    time_since = serializers.SerializerMethodField()
    time_sent = serializers.SerializerMethodField()

    class Meta:
        model = Thread
        fields = ["id", "title", "image", "desc", "position", "time_since", "time_sent"]

    def get_title(self, obj):
        profile_id = self.context.get('request').user.profile.id
        return obj.receiver_profiles(profile_id, True).fullname()

    def get_position(self, obj):
        profile_id = self.context.get('request').user.profile.id
        return obj.receiver_profiles(profile_id, True).tagline

    def get_image(self, obj):
        profile_id = self.context.get('request').user.profile.id
        return obj.receiver_profiles(profile_id, True).photo

    def get_desc(self, obj):
        instance = obj.messages.last()
        if instance:
            return instance.content
        return ''

    def get_time_since(self, obj):
        instance = obj.messages.last()
        if instance:
            return timesince(instance.sent_at)
        return ''

    def get_time_sent(self, obj):
        instance = obj.messages.last()
        if instance:
            return instance.sent_at.strftime("%H:%M %p")
        return ''

    def get_latest_message(self, obj):
        instance = obj.messages.last()
        if instance:
            return {
                'content': instance.content,
                'sent_at': instance.sent_at,
                'time_sent': instance.sent_at.strftime("%H:%M %p"),
                'time_since': timesince(instance.sent_at)
            }
        return {}
