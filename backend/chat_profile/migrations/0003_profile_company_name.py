# Generated by Django 2.2.4 on 2021-01-18 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_profile', '0002_auto_20210116_0349'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='company_name',
            field=models.CharField(blank=True, default=None, max_length=255, null=True, verbose_name='Company'),
        ),
    ]