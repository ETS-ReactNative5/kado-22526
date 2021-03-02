from django.db import migrations
from job.models import Job


def update_populated_data(_, __):
    for job in Job.objects.all():
        job.skills = 'Website Redesign; Website Development'
        job.save()


class Migration(migrations.Migration):
    dependencies = [
        ('job', '0008_auto_20210302_0836')
    ]

    operations = [
        migrations.RunPython(update_populated_data,
                             reverse_code=migrations.RunPython.noop)
    ]
