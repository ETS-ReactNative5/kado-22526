from django.db import models

from kado_22526.models import TimestampModel


class Faq(TimestampModel):
    question = models.TextField(unique=True)
    answer = models.TextField(blank=True, null=True)
    user = models.ForeignKey('users.User', verbose_name='Sender', related_name='faqs', on_delete=models.CASCADE)

    @classmethod
    def search(cls, search_query=None, **kwargs):
        queryset = cls.objects.all()
        if search_query:
            queryset = queryset.filter(
                models.Q(question__icontains=search_query) |
                models.Q(answer__icontains=search_query)
            )
        return queryset

    def __str__(self):
        return self.question
