from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone

from .utils import validate_search_params
from .enums import JobsExperienceLevelEnum, JobCategoryEnum, JobTypeEnum

Experience_levels = (
    (JobsExperienceLevelEnum.beginner.name, JobsExperienceLevelEnum.beginner.value),
    (JobsExperienceLevelEnum.intermediate.name, JobsExperienceLevelEnum.intermediate.value),
    (JobsExperienceLevelEnum.expert.name, JobsExperienceLevelEnum.expert.value),
)

Job_category = (
    (JobCategoryEnum.service.name, JobCategoryEnum.service.value),
    (JobCategoryEnum.project.name, JobCategoryEnum.project.value),
)

Job_type = (
    (JobTypeEnum.part_time.name, JobTypeEnum.part_time.value),
    (JobTypeEnum.full_time.name, JobTypeEnum.full_time.value),
    (JobTypeEnum.remote.name, JobTypeEnum.remote.value),
    (JobTypeEnum.one_time.name, JobTypeEnum.one_time.value),
    (JobTypeEnum.ongoing_project.name, JobTypeEnum.ongoing_project.value),
)


class Job(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True, )
    skills = ArrayField(models.CharField(max_length=250), blank=True, default=list)
    experience_level = models.CharField('Experience levels', choices=Experience_levels, default=None, null=True,
                                        blank=True, max_length=15)
    job_category = models.CharField('Job category', choices=Job_category, default=None, null=True, blank=True,
                                    max_length=15)
    job_type = models.CharField('Job type', choices=Job_type, default=None, null=True, blank=True, max_length=17)
    start_date = models.DateField('Start Date', null=True, blank=True)
    end_date = models.DateField('End Date', null=True, blank=True)
    hours_per_week = models.IntegerField(verbose_name="Availability", blank=True, null=True)
    payment_per_hour = models.IntegerField(blank=True, null=True)
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
    def search(cls, search_query=None, **kwargs):
        params = validate_search_params(kwargs.get('params', {}))

        queryset = cls.objects.filter(deleted=False)
        if search_query:
            queryset = queryset.filter(
                models.Q(skills__icontains=search_query) |
                models.Q(title__icontains=search_query) |
                models.Q(field__icontains=search_query) |
                models.Q(owner__company_name__icontains=search_query) |
                models.Q(description__icontains=search_query)
            )

        start_date = params.pop('start_date', None)
        end_date = params.pop('end_date', None)
        min_pay = params.pop('min_pay', None)
        max_pay = params.pop('max_pay', 100000)  # add a random max figure when max pay is not provided
        location = params.pop('location', None)
        if start_date:
            queryset = queryset.filter(start_date__gte=start_date)
        if end_date:
            queryset = queryset.filter(end_date__lte=end_date)
        if min_pay:
            queryset = queryset.filter(payment_per_hour__range=[min_pay, max_pay])
        if location:
            queryset = queryset.filter(owner__location__icontains=location)

        return queryset.filter(**params)

    def __str__(self):
        return f'{self.title}'
