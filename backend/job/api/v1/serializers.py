from rest_framework import serializers
from django.http import HttpRequest
from django.utils.timesince import timesince

from kado_22526.utils import update_object
from job.models import Job, JobCategory
from chat_profile.models import Profile


class JobSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField(required=False, read_only=True)
    time_since = serializers.SerializerMethodField()
    time_sent = serializers.SerializerMethodField()
    time_frame = serializers.SerializerMethodField()
    is_favorite = serializers.SerializerMethodField()
    favorite = serializers.BooleanField(required=False)

    class Meta:
        model = Job
        fields = (
            "id",
            "title",
            "description",
            "category",
            "location",
            'responsibilities',
            "duration",
            "time",
            "skills",
            "experience_level",
            "job_category",
            "job_type",
            "start_date",
            "end_date",
            "hours_per_week",
            "payment_per_hour",
            "field",
            "owner",
            "sent_at",
            "time_since",
            "time_sent",
            "is_favorite",
            "favorite",
            "time_frame"
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

    def get_time_frame(self, obj):
        try:
            duration, rem = divmod((obj.end_date - obj.start_date).days, 31)
            prefix = 'months' if duration < 12 else 'years'
            return f'{duration} {prefix}+' if rem > 0 else f'{duration} {prefix}'
        except:
            return ''

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
        favorite = validated_data.get('favorite', -1)
        if favorite != -1:
            instance.favorites.add(user.profile) if favorite else instance.favorites.remove(user.profile)
        if user.id != instance.owner.user.id:
            return instance

        instance = update_object(instance, validated_data)

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


class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCategory
        fields = "__all__"

    # no job category CRUD operations at the moment
    def create(self, validated_data):
        return JobCategory()

    def update(self, instance, validated_data):
        return instance
