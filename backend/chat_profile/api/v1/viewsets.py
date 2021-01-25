from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from chat_profile.models import VerificationCode, Profile, Contact
from .serializers import (
    VerificationCodeSerializer,
    ProfileSerializer,
    ContactSerializer,
)
from rest_framework import viewsets
from chat_profile.enums import all_profile_type_options, work_type_options


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
        authentication.SessionAuthentication,
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


class ListProfileTypes(APIView):
    """
    View to list all profile types in the system.

    * Requires token authentication.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        """
        Return a list of all profile types.
        """
        return Response(all_profile_type_options)


class ListWorkTypes(APIView):
    """
    View to list all work types in the system.

    * Requires token authentication.
    """
    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, format=None):
        """
        Return a list of all work types.
        """
        return Response(work_type_options)
