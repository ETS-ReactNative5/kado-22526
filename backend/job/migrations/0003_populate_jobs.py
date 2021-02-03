from django.db import migrations
from core.utils.jobs_dump_data import create_jobs


def populate_dump_jobs(_, __):
    # TODO: create django admin command to populate data
    # Function was meant to run once on production, hence commented
    try:
        create_jobs()
    except:
        pass


class Migration(migrations.Migration):
    dependencies = [
        ('job', '0002_auto_20210125_0546'),
    ]

    operations = [
        migrations.RunPython(populate_dump_jobs, reverse_code=migrations.RunPython.noop)
    ]
