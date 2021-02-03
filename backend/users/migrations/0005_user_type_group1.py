from django.db import migrations
from django.contrib.auth.models import Group
from users.enums import user_groups, UserGroups
from users.models import User
from chat_profile.enums import student_type_options, company_type_options


def create_default_groups(_, __):
    for group in user_groups:
        Group.objects.get_or_create(name=group)
    student_group = Group.objects.get(name=UserGroups.student.name)
    company_group = Group.objects.get(name=UserGroups.company.name)

    # add all users to student group
    for user in User.objects.all():
        if hasattr(user, 'profile') and user.profile.profile_type in company_type_options:
            user.groups.add(company_group)
        else:
            user.groups.add(student_group)


class Migration(migrations.Migration):
    dependencies = (
        ("users", "0004_remove_user_user_type"),
    )
    operations = [
        migrations.RunPython(create_default_groups, reverse_code=migrations.RunPython.noop)
    ]
