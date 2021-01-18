from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone

from .enums import JobsExperienceLevelEnum

Experience_levels = (
    (JobsExperienceLevelEnum.beginner.name, JobsExperienceLevelEnum.beginner.value),
    (JobsExperienceLevelEnum.intermediate.name, JobsExperienceLevelEnum.intermediate.value),
    (JobsExperienceLevelEnum.expert.name, JobsExperienceLevelEnum.expert.value),
)


class Job(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True, )
    skills = ArrayField(models.CharField(max_length=250), blank=True, default=list)
    experience_level = models.CharField('Experience levels', choices=Experience_levels, default=None, null=True,
                                        blank=True, max_length=15)
    time_frame = models.CharField(max_length=150, null=True, blank=True, )
    field = models.CharField(max_length=150, null=True, blank=True, )
    owner = models.ForeignKey('chat_profile.Profile', related_name='jobs', on_delete=models.CASCADE)
    favorites = models.ManyToManyField('chat_profile.Profile', related_name='favorite_jobs', blank=True, )
    sent_at = models.DateTimeField(default=timezone.now)
    deleted = models.BooleanField(default=False)

    @classmethod
    def is_favorite(cls, instance, profile):
        if cls.objects.filter(pk=instance.id, favorites__id=profile.id).exists():
            return True
        return False

    @classmethod
    def search(cls, search_query=None):
        queryset = cls.objects.filter(deleted=False)
        if search_query:
            queryset = queryset.filter(
                models.Q(skills__icontains=search_query) |
                models.Q(title__icontains=search_query) |
                models.Q(field__icontains=search_query) |
                models.Q(owner__company_name__icontains=search_query) |
                models.Q(description__icontains=search_query)
            )
        return queryset

    def __str__(self):
        return f'{self.title}'
