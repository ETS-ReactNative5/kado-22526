# Generated by Django 2.2.17 on 2021-01-09 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='homepage',
            options={'verbose_name': 'Page'},
        ),
        migrations.AddField(
            model_name='homepage',
            name='title',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Page Title'),
        ),
    ]