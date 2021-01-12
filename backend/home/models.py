from django.db import models
from django.utils.translation import ugettext_lazy as _


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    title = models.CharField(
        'Page Title',
        max_length=150,
        blank=True,
        null=True,
    )
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    def __str__(self):
        return f'{self.title}'


    @property
    def field(self):
        return "body"

    class Meta:
        verbose_name = _("Page")
