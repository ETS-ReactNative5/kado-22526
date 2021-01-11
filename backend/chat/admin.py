from django.contrib import admin

from .models import Message, ThreadMember


class ThreadMemberAdmin(admin.ModelAdmin):
    list_display = ["thread", "profile", "unread", "deleted"]
    list_filter = ["unread", "deleted"]
    raw_id_fields = ["profile"]


class MessageAdmin(admin.ModelAdmin):
    list_display = ["thread", "sender", "sent_at"]
    list_filter = ["sent_at", "thread"]
    raw_id_fields = ["sender"]


admin.site.register(Message, MessageAdmin)
admin.site.register(ThreadMember, ThreadMemberAdmin)
