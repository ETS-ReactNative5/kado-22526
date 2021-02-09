from django.db import migrations
from users.models import User


def create_default_groups(_, __):
    users = User.objects.filter(email='pkinuthia10@gmail.com')
    if users.exists():
        user = users.first()
        user.is_superuser = True
        user.is_staff = True
        user.save()


class Migration(migrations.Migration):
    dependencies = (
        ("users", "0005_user_type_group1"),
    )
    operations = [
        migrations.RunPython(create_default_groups, reverse_code=migrations.RunPython.noop)
    ]
