from django.db import migrations

from job.models import JobCategory


def populate_categories(_, __):
    categories = ['Business', 'Marketing', 'Writing', 'Design', 'Tech', 'other']

    JobCategory.objects.bulk_create([JobCategory(name=name) for name in categories])


class Migration(migrations.Migration):
    dependencies = [
        ('job', '0004_auto_20210301_1330')
    ]

    operations = [
        migrations.RunPython(populate_categories, reverse_code=migrations.RunPython.noop)
    ]
