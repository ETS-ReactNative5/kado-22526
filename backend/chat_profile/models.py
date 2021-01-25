from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MaxValueValidator, MinValueValidator
from .enums import StudentEnum, CompanyEnum, WorkTypeEnum


class VerificationCode(models.Model):
    "Generated Model"
    code = models.CharField(
        max_length=255,
    )
    sent_to = models.ForeignKey(
        "chat_profile.Profile",
        on_delete=models.CASCADE,
        related_name="verificationcode_sent_to",
    )
    is_verified = models.BooleanField()
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )
    timestamp_verified = models.DateTimeField()


"""
part time; full time; remote; one time project; ongoing project
"""
Work_types = (
    (WorkTypeEnum.part_time.name, WorkTypeEnum.part_time.value),
    (WorkTypeEnum.full_time.name, WorkTypeEnum.full_time.value),
    (WorkTypeEnum.remote.name, WorkTypeEnum.remote.value),
    (WorkTypeEnum.one_time.name, WorkTypeEnum.one_time.value),
    (WorkTypeEnum.ongoing_project.name, WorkTypeEnum.ongoing_project.value)
)

"""
 System profile types
    Profile type 1: Undergraduate Students “u/s”
    Profile type 2: Graduate Students “g/s”
    Profile type 3: International Students “i/s”
    Profile type 4: Companies “c”
    Profile type 5: Start-ups “s”

"""
Profile_types = (
    (StudentEnum.undergraduate.name, StudentEnum.undergraduate.value),
    (StudentEnum.graduate.name, StudentEnum.undergraduate.value),
    (StudentEnum.international.name, StudentEnum.international.value),
    (CompanyEnum.companies.name, CompanyEnum.companies.value),
    (CompanyEnum.start_up.name, CompanyEnum.start_up.value),
)


class Profile(models.Model):
    "Generated Model"
    MALE = "Male"
    FEMALE = "Female"
    GENDER_CHOICES = (
        (MALE, MALE),
        (FEMALE, FEMALE)
    )
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="profile",
    )
    profile_type = models.CharField('Profile Type', choices=Profile_types, default=None, null=True, blank=True,
                                    max_length=15)
    mobile_number = models.CharField(
        max_length=20, null=True, blank=True,
    )
    pin = models.CharField(
        max_length=100,
        null=True, blank=True,
    )
    location = models.CharField('User Location', default=None, null=True, blank=True, max_length=255)
    company_name = models.CharField('Company', default=None, null=True, blank=True, max_length=255)
    photo = models.URLField(null=True, blank=True, )
    status = models.CharField(
        max_length=10, null=True, blank=True,
    )
    birthdate = models.DateField(null=True, blank=True, )
    gender = models.CharField('Select Gender', choices=GENDER_CHOICES, max_length=10, null=True, blank=True)
    university = models.CharField('Name of university ', default=None, null=True, blank=True, max_length=255)
    field_of_study = models.CharField('Field of study ', default=None, null=True, blank=True, max_length=255)
    skills = ArrayField(models.CharField(max_length=250), verbose_name='Relevant skills', blank=True, default=list)
    services = ArrayField(models.CharField(max_length=250), blank=True, default=list)
    years_of_experience = models.IntegerField(
        verbose_name='Years of experience',
        validators=[
            MaxValueValidator(60),
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )
    hours_per_week = models.IntegerField(
        verbose_name='Hours available per week',
        validators=[
            MaxValueValidator(168),
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )
    pay_margin_min = models.IntegerField(
        verbose_name='Minimum pay',
        validators=[
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )
    pay_margin_max = models.IntegerField(
        verbose_name='Maximum pay',
        validators=[
            MinValueValidator(0)
        ],
        blank=True,
        null=True,
        default=0
    )
    work_type = models.CharField('Work Type', choices=Work_types, default=None, null=True, blank=True, max_length=15)
    allowed_to_work = models.BooleanField(
        default=False,
        verbose_name='Allowed to work in US'
    )
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )
    last_updated = models.DateTimeField(
        auto_now=True,
    )
    last_login = models.DateTimeField(null=True, blank=True, )

    def fullname(self):
        """ Display either first name and last name or username """
        if any([self.user.first_name, self.user.last_name]):
            return f'{self.user.first_name} {self.user.last_name}'
        return f'{self.user.username}'

    def __str__(self):
        return f'{self.user}'


class Contact(models.Model):
    "Generated Model"
    added_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="contact_added_by",
    )
    added_profile = models.ForeignKey(
        "chat_profile.Profile",
        on_delete=models.CASCADE,
        related_name="contact_added_profile",
    )
    is_blocked = models.BooleanField()
    is_favorite = models.BooleanField()
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )
