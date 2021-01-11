from django.contrib import admin

from .models import HomePage


@admin.register(HomePage)
class PagesAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'body', ]
