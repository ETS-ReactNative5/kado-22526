from django.contrib import admin
from .models import Faq

class FAQAdminModel(admin.ModelAdmin):
    list_display = ('id', 'question', 'answer', 'user', 'published')

admin.site.register(Faq, FAQAdminModel)
