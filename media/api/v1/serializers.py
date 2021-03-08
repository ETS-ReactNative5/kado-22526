from rest_framework import serializers
from django.http import HttpRequest
from media.models import Media


class MediaSerializer(serializers.ModelSerializer):
    profiles = serializers.SerializerMethodField(required=False)

    class Meta:
        model = Media
        fields = "__all__"

    def get_profiles(self, instance):
        return [{"id": i.id} for i in instance.profiles.all()]

    def create(self, validated_data):
        user = self._get_request().user
        media = Media.objects.create(**validated_data)
        media.profiles.add(user.profile)
        return media

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request
