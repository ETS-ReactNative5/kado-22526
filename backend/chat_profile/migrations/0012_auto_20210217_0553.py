# Generated by Django 2.2.17 on 2021-02-17 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_profile', '0011_auto_20210217_0536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='allowed_to_work',
            field=models.CharField(default='Yes', max_length=20, verbose_name='Allowed to work in US?'),
        ),
    ]