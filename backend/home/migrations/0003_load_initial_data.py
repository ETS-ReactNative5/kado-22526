from django.db import migrations


def create_customtext(apps, schema_editor):
    CustomText = apps.get_model("home", "CustomText")
    customtext_title = "Kado"

    CustomText.objects.create(title=customtext_title)


def create_homepage(apps, schema_editor):
    HomePage = apps.get_model("home", "HomePage")
    homepage_body = """
        <h1 class="display-4 text-center">Kado</h1>
        <p class="lead">
            This is the sample application created and deployed from the Crowdbotics app.
            You can view list of packages selected for this application below.
        </p>"""

    HomePage.objects.bulk_create([HomePage(title=page, body=homepage_body) for page in ['Home Page', 'About Us']])


def create_site(apps, schema_editor):
    Site = apps.get_model("sites", "Site")
    custom_domain = "kado-22526.botics.co"

    site_params = {
        "name": "Kado",
    }
    if custom_domain:
        site_params["domain"] = custom_domain

    Site.objects.update_or_create(defaults=site_params, id=1)


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0002_auto_20210109_0630"),
        ("sites", "0002_alter_domain_unique"),
    ]

    operations = [
        migrations.RunPython(create_customtext, reverse_code=migrations.RunPython.noop),
        migrations.RunPython(create_homepage, reverse_code=migrations.RunPython.noop),
        migrations.RunPython(create_site, reverse_code=migrations.RunPython.noop),
    ]
