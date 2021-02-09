from django.db import migrations
from faq.models import Faq
from users.models import User
from kado_22526.utils import update_object


def create_faqs(_, __):
    user = User.objects.first()
    faqs = [{
        'question': "What is KADO?",
        "published": True,
        "user_id": user.id
    }, {
        'question': "What's the difference between finding clients online, versus locally?",
        "published": True,
        "user_id": user.id
    }
    ]
    for faq in faqs:
        update_object(Faq(), faq)


class Migration(migrations.Migration):
    dependencies = (
        ("faq", "0002_faq_published"),
    )
    operations = [
        migrations.RunPython(create_faqs, reverse_code=migrations.RunPython.noop)
    ]
