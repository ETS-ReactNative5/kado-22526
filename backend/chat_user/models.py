from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils import timezone

from .signals import message_sent
from .utils import cached_attribute


class Thread(models.Model):
    subject = models.CharField(max_length=150)
    profiles = models.ManyToManyField('chat_profile.Profile', through="ThreadMember")

    @classmethod
    def inbox(cls, profile, search_query=None):
        queryset = cls.objects.filter(thread_member__profile=profile, thread_member__deleted=False)
        if search_query:
            # Filter messages by content, profile first, last and user names
            queryset = queryset.filter(
                models.Q(messages__content__icontains=search_query) |
                models.Q(profiles__user__first_name__icontains=search_query) |
                models.Q(profiles__user__last_name__icontains=search_query) |
                models.Q(profiles__user__username__icontains=search_query)
            )
        return queryset

    @classmethod
    def deleted(cls, profile):
        return cls.objects.filter(thread_member__profile=profile, thread_member__deleted=True)

    @classmethod
    def unread(cls, profile):
        return cls.objects.filter(
            thread_member__profile=profile,
            thread_member__deleted=False,
            thread_member__unread=True
        )

    def __str__(self):
        return f"{self.subject}: {', '.join([str(profile) for profile in self.profiles.all()])}"

    def get_absolute_url(self):
        return reverse("chat:thread", args=[self.pk])

    @property
    @cached_attribute
    def first_message(self):
        return self.messages.all()[0]

    @property
    @cached_attribute
    def latest_message(self):
        return self.messages.order_by("-sent_at")[0]

    @classmethod
    def ordered(cls, objs):
        """
        Returns the iterable ordered the correct way, this is a class method
        because we don"t know what the type of the iterable will be.
        """
        objs = list(objs)
        objs.sort(key=lambda o: o.latest_message.sent_at, reverse=True)
        return objs


class ThreadMember(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='thread_member')
    profile = models.ForeignKey('chat_profile.Profile', on_delete=models.CASCADE, related_name='thread_member')

    unread = models.BooleanField()
    deleted = models.BooleanField()


class Message(models.Model):
    thread = models.ForeignKey(Thread, related_name="messages", on_delete=models.CASCADE)

    sender = models.ForeignKey('chat_profile.Profile', related_name="sent_messages", on_delete=models.CASCADE)
    sent_at = models.DateTimeField(default=timezone.now)
    content = models.TextField()
    attachment = models.URLField(null=True, blank=True, )

    @classmethod
    def new_reply(cls, thread, profile, content, attachment=''):
        """
        Create a new reply for an existing Thread.

        Mark thread as unread for all other participants, and
        mark thread as read by replier.
        """
        msg = cls.objects.create(thread=thread, sender=profile, content=content, attachment=attachment)
        thread.thread_member.exclude(profile=profile).update(deleted=False, unread=True)
        thread.thread_member.filter(profile=profile).update(deleted=False, unread=False)
        message_sent.send(sender=cls, message=msg, thread=thread, reply=True)
        return msg

    @classmethod
    def new_message(cls, from_profile, to_profiles, subject, content, attachment=''):
        """
        Create a new Message and Thread.

        Mark thread as unread for all recipients, and
        mark thread as read and deleted from inbox by creator.
        """
        thread = Thread.objects.create(subject=subject)
        for profile_id in to_profiles:
            thread.thread_member.create(profile_id=profile_id, deleted=False, unread=True)
        thread.thread_member.create(profile=from_profile, deleted=True, unread=False)
        msg = cls.objects.create(thread=thread, sender=from_profile, content=content, attachment=attachment)
        message_sent.send(sender=cls, message=msg, thread=thread, reply=False)
        return msg

    class Meta:
        ordering = ("sent_at",)

    def get_absolute_url(self):
        return self.thread.get_absolute_url()

    def __str__(self):
        return f'{self.content}'
