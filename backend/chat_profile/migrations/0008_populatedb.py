from django.db import migrations


def populate_dump_profile_users(_, __):
    # TODO: create django admin command to populate data
    # Function was meant to run once on production, hence commented
    # from core.utils.user_dump_data import create_users
    # create_users()
    pass


class Migration(migrations.Migration):
    dependencies = [
        ('chat_profile', '0007_profile_tagline'),
    ]

    operations = [
        migrations.RunPython(populate_dump_profile_users, reverse_code=migrations.RunPython.noop)
    ]
