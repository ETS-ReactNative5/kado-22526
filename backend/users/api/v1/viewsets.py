from rest_framework import authentication
from users.models import User
from .serializers import UserSerializer
from rest_framework import viewsets, serializers, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils.translation import ugettext_lazy as _


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    permission_classes = [IsAuthenticated, ]
    queryset = User.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance != request.user:
            raise serializers.ValidationError(
                {"errors": _("You don't have permission to delete this account. You can only delete your own account.")}
            )
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
