from django.db import migrations
from core.utils.dump_data import create_users


def populate_dump_profile_users(_, __):
    try:
        create_users()
    except:
        pass


class Migration(migrations.Migration):
    dependencies = [
        ('chat_profile', '0007_profile_tagline'),
    ]

    operations = [
        migrations.RunPython(populate_dump_profile_users, reverse_code=migrations.RunPython.noop)
    ]
