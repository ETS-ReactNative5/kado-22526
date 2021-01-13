from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated
from chat_profile.models import VerificationCode, Profile, Contact
from .serializers import (
    VerificationCodeSerializer,
    ProfileSerializer,
    ContactSerializer,
)
from rest_framework import viewsets


class VerificationCodeViewSet(viewsets.ModelViewSet):
    serializer_class = VerificationCodeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = VerificationCode.objects.all()


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
    )
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Contact.objects.all()
