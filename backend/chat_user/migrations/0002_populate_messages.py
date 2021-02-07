from django.db import migrations
from core.utils.chat_dump_data import create_messages


def populate_dump_messages(_, __):
    # TODO: create django admin command to populate data
    # Function was meant to run once on production, hence commented
    try:
        create_messages()
    except:
        pass


class Migration(migrations.Migration):
    dependencies = [
        ('chat_user', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate_dump_messages, reverse_code=migrations.RunPython.noop)
    ]
