from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

from .enums import StudentEnum, CompanyEnum

"""
 System user types
    User type 1: Undergraduate Students “u/s”
    User type 2: Graduate Students “g/s”
    User type 3: International Students “i/s”
    User type 4: Companies “c”
    User type 5: Start-ups “s”

"""
User_types = (
    (StudentEnum.undergraduate.name, StudentEnum.undergraduate.value),
    (StudentEnum.graduate.name, StudentEnum.undergraduate.value),
    (StudentEnum.international.name, StudentEnum.international.value),
    (CompanyEnum.companies.name, CompanyEnum.companies.value),
    (CompanyEnum.start_up.name, CompanyEnum.start_up.value),
)


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.
    """
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    first_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    last_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    email = models.EmailField(
        null=True,
        blank=True,
        max_length=255,
    )
    timestamp_created = models.DateTimeField(
        null=True,
        blank=True,
        auto_now_add=True,
    )
    last_updated = models.DateTimeField(
        null=True,
        blank=True,
        auto_now=True,
    )

    user_type = models.CharField('User Type', choices=User_types, default=None, null=True, blank=True, max_length=15)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
