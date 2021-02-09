from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import viewsets
from faq.models import Faq
from .serializers import FaqSerializer


class FAQViewSet(viewsets.ModelViewSet):
    serializer_class = FaqSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    permission_classes = [IsAuthenticated]
    queryset = Faq.objects.filter(published=True)

    def get_queryset(self):
        search_query = self.request.query_params.get('search', None)
        queryset = Faq.search(search_query)
        return queryset.filter(published=True)
