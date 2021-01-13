from django.conf import settings
from django.db import models


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
    mobile_number = models.CharField(
        max_length=20, null=True, blank=True,
    )
    pin = models.CharField(
        max_length=100,
        null=True, blank=True,
    )
    location = models.CharField('User Location', default=None, null=True, blank=True, max_length=255)
    photo = models.URLField(null=True, blank=True, )
    status = models.CharField(
        max_length=10, null=True, blank=True,
    )
    birthdate = models.DateField(null=True, blank=True,)
    gender = models.CharField('Select Gender', choices=GENDER_CHOICES, max_length=10, null=True, blank=True)

    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )
    last_updated = models.DateTimeField(
        auto_now=True,
    )
    last_login = models.DateTimeField(null=True, blank=True, )

    def fullname(self):
        if self.user:
            return f'{self.user.first_name} {self.user.last_name}'

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

# Create your models here.
