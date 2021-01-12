from rest_framework import serializers
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from profile.models import VerificationCode, Profile, Contact


class VerificationCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationCode
        fields = "__all__"


class ProfileSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField()

    class Meta:
        model = Profile
        fields = ("id", "photo", "fullname", "location", "mobile_number", "gender", "birthdate")

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def validate(self, data):
        return super().validate(data)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        return data

    def update(self, instance, validated_data):
        user = self._get_request().user
        if instance.user.id != user.id:
            raise serializers.ValidationError(
                _("You can only edit your own profile.")
            )
        instance.photo = validated_data.get('photo', instance.photo)
        instance.location = validated_data.get('location', instance.location)
        instance.mobile_number = validated_data.get('mobile_number', instance.mobile_number)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.birthdate = validated_data.get('birthdate', instance.birthdate)
        instance.save()

        if validated_data.get('fullname'):
            fullname = validated_data.get('fullname', ' ').split(' ')
            instance.user.first_name = fullname.pop(0)
            instance.user.last_name = " ".join(el for el in fullname)
            instance.user.save()
        return instance

    def create(self, validated_data):
        user = self._get_request().user
        profile = Profile(user=user)
        profile.photo = validated_data.get('photo', '')
        profile.location = validated_data.get('location', '')
        profile.mobile_number = validated_data.get('mobile_number', '')
        profile.gender = validated_data.get('gender')
        profile.birthdate = validated_data.get('birthdate')
        profile.save()
        if validated_data.get('fullname'):
            fullname = validated_data.get('fullname', ' ').split(' ')
            user.first_name = fullname.pop(0)
            user.last_name = " ".join(el for el in fullname)
            user.save()
        return profile


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
