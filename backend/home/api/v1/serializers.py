from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.contrib.auth.models import Group
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from rest_framework.authtoken.models import Token
from home.models import HomePage, CustomText
from chat_profile.models import Profile
from users.enums import user_groups

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    user_type = serializers.ChoiceField(choices=user_groups, required=False)

    class Meta:
        model = User
        fields = ("id", "email", "password", "user_type", "first_name")
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}},
            "email": {
                "required": True,
                "allow_blank": False,
            },
        }

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address.")
                )
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get("email"),
            name=validated_data.get("name"),
            first_name=validated_data.get("first_name"),
            last_name=" ",
            username=generate_unique_username(
                [validated_data.get("name"), validated_data.get("email"), "user"]
            ),
        )
        user.set_password(validated_data.get("password"))
        user.save()

        # add user to group
        group = Group.objects.get(name=validated_data.get('user_type'))
        user.groups.add(group)

        # Create user profile
        Profile.objects.create(user=user)
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = "__all__"


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name"]


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""

    password_reset_form_class = ResetPasswordForm


class TokenSerializer(serializers.ModelSerializer):
    profile_id = serializers.SerializerMethodField()
    user_groups = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'profile_id', 'user_groups')

    def get_user_groups(self, instance):
        return [group.name for group in instance.user.groups.all()]

    def get_profile_id(self, _):
        user = self.instance.user
        if hasattr(user, 'profile'):
            return user.profile.id
        profile = Profile.objects.create(user=user)
        return profile.id
