from rest_framework import serializers
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from chat_profile.models import VerificationCode, Profile, Contact
from kado_22526.utils import update_object
from core.aws import S3
from chat_user.models import Thread


class VerificationCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationCode
        fields = "__all__"


class ProfileThreadSerializer(serializers.ModelSerializer):
    """ Show relevant fields information for chat thread """

    class Meta:
        model = Profile
        fields = ('id', 'photo', 'fullname')


class ProfileSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(required=False)
    photo_file = serializers.FileField(required=False)
    favorite = serializers.BooleanField(required=False)
    is_favorite = serializers.SerializerMethodField(required=False)
    thread_id = serializers.SerializerMethodField(required=False)
    total_jobs = serializers.SerializerMethodField(required=False)

    class Meta:
        model = Profile
        fields = (
            "id", "photo", "photo_file", "fullname",
            "location", "mobile_number", "gender", "birthdate",
            "allowed_to_work", "work_experience",
            "field_of_study",
            "hours_per_week",
            "max_pay",
            "min_pay",
            "services",
            "skills",
            "university",
            "work_types",
            "profile_type",
            "time_per_week",
            "languages",
            "availability",
            "years_of_experience",
            "company_name", "tagline", "industry", "thread_id",
            "bio", "favorite", "is_favorite", 'total_jobs', "status"
        )

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def get_is_favorite(self, instance):
        user = self._get_request().user
        return user.profile.favorite_profiles.filter(id=instance.id).exists()

    def get_total_jobs(self, instance):
        return instance.jobs.count()

    def get_thread_id(self, instance):
        user = self._get_request().user
        thread_qs = Thread.get_profile_thread(user.profile.id, [instance.id])
        if thread_qs.exists():
            return thread_qs.first().id
        return None

    def validate(self, data):
        return super().validate(data)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        return data

    def update(self, instance, validated_data):
        user = self._get_request().user
        favorite = validated_data.get('favorite', None)
        if favorite is not None:
            if favorite:
                instance.favorites.add(user.profile)
            else:
                instance.favorites.remove(user.profile)
        if instance.user.id != user.id:
            if not user.is_superuser:
                return instance
        fullname = validated_data.get('fullname', False)
        if validated_data.get('photo_file'):
            photo = validated_data.get('photo_file')
            payload = {'file_name': photo._name, 'data': photo}
            upload_response = S3.upload_file(payload)
            if upload_response:
                validated_data['photo'] = upload_response
        updated_instance = update_object(instance, validated_data)

        if validated_data.get('fullname'):
            fullname = fullname.split(' ')
            updated_instance.user.first_name = fullname.pop(0)
            updated_instance.user.last_name = " ".join(el for el in fullname)
            updated_instance.user.save()
        return updated_instance

    def create(self, validated_data):
        user = self._get_request().user
        if hasattr(user, 'profile'):
            raise serializers.ValidationError(
                {"error": _("This User has a profile!")}
            )
        profile = Profile(user=user)
        fullname = validated_data.get('fullname', False)
        if validated_data.get('photo_file'):
            photo = validated_data.get('photo_file')
            payload = {'file_name': photo._name, 'data': photo}
            upload_response = S3.upload_file(payload)
            validated_data['photo'] = upload_response

        profile = update_object(profile, validated_data)
        if fullname:
            fullname = fullname.split(' ')
            profile.user.first_name = fullname.pop(0)
            profile.user.last_name = " ".join(el for el in fullname)
            profile.user.save()
        return profile


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
