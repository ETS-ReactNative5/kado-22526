import os
from django.db import models

from core.models import TimestampModel


def media_directory(instance, filename):
    return os.path.join('media/media_type_%s' % instance.id, filename)


class Media(TimestampModel):
    file = models.FileField(default=None, upload_to=media_directory, null=True, blank=True)
    profiles = models.ManyToManyField('user_profile.Profile', related_name='medias')
    deleted = models.ManyToManyField('user_profile.Profile', related_name='deleted_medias')

    @classmethod
    def add_profile_to_media(cls, file: str, profile_id):
        queryset = cls.objects.exclude(deleted__id=profile_id).filter(file__icontains=file.split('/')[-1])
        if queryset.exists():
            media = queryset.last()
            media.profiles.add(profile_id)

    @classmethod
    def remove_profile_from_media(cls, file: str, profile_id, media_id):
        media = None
        if media_id:
            queryset = cls.objects.filter(id=media_id)
            if queryset.exists():
                media = queryset.first()
        if file:
            queryset = cls.objects.filter(file__icontains=file)
            if queryset.exists():
                media = queryset.last()
        if media:
            media.profiles.remove(profile_id)
            media.deleted.add(profile_id)

    @classmethod
    def search(cls, profile_id=None, search_query=None, **kwargs):
        queryset = cls.objects.exclude(deleted__id=profile_id).all()
        if profile_id:
            queryset = queryset.filter(profiles__id=profile_id)
        if search_query:
            queryset = queryset.filter(file__icontains=search_query)
        return queryset

