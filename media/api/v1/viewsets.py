from rest_framework import viewsets, authentication
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from media.models import Media
from .serializers import MediaSerializer


class MediaViewSet(viewsets.ModelViewSet):
    serializer_class = MediaSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    permission_classes = [IsAuthenticated]

    queryset = Media.objects.all()

    def get_queryset(self):
        search_query = self.request.query_params.get('search', None)
        profile = self.request.user.profile
        return Media.search(profile.id, search_query)

    def destroy(self, request, *args, **kwargs):
        # users should not delete images
        pass


class MediaAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication, authentication.SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def delete(self, request, pk, format=None):
        Media.remove_profile_from_media('', request.user.profile.id, pk)
        return Response(status=status.HTTP_204_NO_CONTENT)
