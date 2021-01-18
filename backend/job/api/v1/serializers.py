from rest_framework import serializers
from django.http import HttpRequest
from django.utils.timesince import timesince

from kado_22526.utils import update_object
from job.models import Job
from chat_profile.models import Profile


class JobSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField(required=False, read_only=True)
    time_since = serializers.SerializerMethodField()
    time_sent = serializers.SerializerMethodField()
    is_favorite = serializers.SerializerMethodField()
    favorite = serializers.BooleanField(required=False)

    class Meta:
        model = Job
        fields = (
            "id", "title", "description",
            "owner", "sent_at", "time_since",
            "time_sent", "skills", "experience_level",
            "time_frame", "is_favorite", "favorite"
        )

    def get_is_favorite(self, instance):
        user = self._get_request().user
        if hasattr(user, 'profile'):
            return Job.is_favorite(instance, user.profile)
        return False

    def get_owner(self, obj):
        return obj.owner.id

    def get_time_sent(self, obj):
        return obj.sent_at.strftime("%H:%M %p")

    def get_time_since(self, obj):
        return timesince(obj.sent_at)

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def update(self, instance, validated_data):
        user = self._get_request().user
        if user.id != instance.owner.user.id:
            raise serializers.ValidationError(
                {"error": _("You can only edit your own job feed.")}
            )

        instance = update_object(instance, validated_data)
        favorite = validated_data.get('favorite', -1)
        if favorite != -1:
            instance.favorites.add(user.profile) if favorite else instance.favorites.remove(user.profile)
        return instance

    def create(self, validated_data):
        user = self._get_request().user
        if hasattr(user, 'profile'):
            profile = user.profile
        else:
            profile = Profile(user=user)
            profile.save()
        instance = Job(owner=profile)
        instance_updated = update_object(instance, validated_data)
        return instance_updated
