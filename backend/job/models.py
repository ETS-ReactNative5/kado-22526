from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone
from django.core.validators import MinValueValidator

from kado_22526.models import TimestampModel
from .utils import validate_search_params
from .enums import (
    JobsExperienceLevelEnum,
    JobCategoryEnum,
    JobTypeEnum,
    BudgetTypeEnum,
    JobDurationEnum, JobTimeEnum
)

Job_duration = (
    (JobDurationEnum.less_than_two_weeks.name, JobDurationEnum.less_than_two_weeks.value),
    (JobDurationEnum.two_to_four_weeks.name, JobDurationEnum.two_to_four_weeks.value),
    (JobDurationEnum.more_than_four_weeks.name, JobDurationEnum.more_than_four_weeks.value),
)

Job_time = (
    (JobTimeEnum.less_than_10_hours.name, JobTimeEnum.less_than_10_hours.value),
    (JobTimeEnum.ten_to_twenty_hours.name, JobTimeEnum.ten_to_twenty_hours.value),
    (JobTimeEnum.more_than_twenty_hours.name, JobTimeEnum.more_than_twenty_hours.value),
)

Experience_levels = (
    (JobsExperienceLevelEnum.beginner.name, JobsExperienceLevelEnum.beginner.value),
    (JobsExperienceLevelEnum.intermediate.name, JobsExperienceLevelEnum.intermediate.value),
    (JobsExperienceLevelEnum.expert.name, JobsExperienceLevelEnum.expert.value),
)

Budget_type = (
    (BudgetTypeEnum.fixed_price.name, BudgetTypeEnum.fixed_price.value),
    (BudgetTypeEnum.per_hour.name, BudgetTypeEnum.per_hour.value),
    (BudgetTypeEnum.negotiable.name, BudgetTypeEnum.negotiable.value),
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


class JobCategory(TimestampModel):
    name = models.CharField(max_length=150)


class Job(models.Model):
    title = models.CharField(max_length=150)
    location = models.CharField(max_length=150, default='USA')
    description = models.TextField(null=True, blank=True, )
    responsibilities = models.TextField(null=True, blank=True, )
    skills = models.TextField(null=True, blank=True, )
    category = models.ForeignKey('job.JobCategory', on_delete=models.CASCADE, null=True, default=None)
    experience_level = models.CharField('Experience levels', choices=Experience_levels, default=None, null=True,
                                        blank=True, max_length=15)
    job_category = models.CharField('Job category', choices=Job_category, default=None, null=True, blank=True,
                                    max_length=15)  # TODO:  REMOVE DEPRECATAED
    job_type = models.CharField('Job type', choices=Job_type, default=None, null=True, blank=True, max_length=150)
    budget_type = models.CharField('Budget type', choices=Budget_type, default=None, null=True, blank=True,
                                   max_length=150)
    duration = models.CharField('Duration', choices=Job_duration, default=None, null=True, blank=True, max_length=150)
    time = models.CharField('Time', choices=Job_time, default=None, null=True, blank=True, max_length=150)
    start_date = models.DateField('Start Date', null=True, blank=True)
    end_date = models.DateField('End Date', null=True, blank=True)
    hours_per_week = models.IntegerField(verbose_name="Availability", blank=True, null=True)
    people = models.IntegerField(verbose_name="Candidates required", blank=True, null=True)
    fixed_price = models.IntegerField(verbose_name="Fixed price", blank=True, null=True)
    payment_per_hour = models.IntegerField(blank=True, null=True)
    field = models.CharField(max_length=150, null=True, blank=True, )
    owner = models.ForeignKey('chat_profile.Profile', related_name='jobs', on_delete=models.CASCADE)
    favorites = models.ManyToManyField('chat_profile.Profile', related_name='favorite_jobs', blank=True, )
    applied = models.ManyToManyField('chat_profile.Profile', related_name='applied_jobs', blank=True, )
    sent_at = models.DateTimeField(default=timezone.now)
    deleted = models.BooleanField(default=False)
    min_pay = models.IntegerField(
        verbose_name='Minimum pay',
        validators=[
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )
    max_pay = models.IntegerField(
        verbose_name='Maximum pay',
        validators=[
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )

    @classmethod
    def is_favorite(cls, instance, profile):
        if cls.objects.filter(pk=instance.id, favorites__id=profile.id).exists():
            return True
        return False

    @classmethod
    def is_applied(cls, instance, profile):
        if cls.objects.filter(pk=instance.id, applied__id=profile.id).exists():
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

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'{self.title}'
