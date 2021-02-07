from chat_profile.models import Profile
from chat_user.models import Message


def create_messages():
    company_profiles = [{'id': p.id, 'name': p.company_name, 'profile': p} for p in
                        Profile.objects.exclude(company_name=None).filter(user__groups__name__contains='company')]
    student_profiles = [{'id': p.id, 'name': p.fullname(), 'profile': p} for p in
                        Profile.objects.filter(user__groups__name__contains='student')]

    for student in student_profiles:
        for company in company_profiles:
            message = Message.new_message(
                from_profile=student.get('profile'),
                to_profiles=[company.get('id')],
                subject='DEFAULT SUBJECT',
                content=f'Hi {company.get("name")}. I came across to your part-time project opportunity...'
            )

            Message.new_reply(
                thread=message.thread,
                profile=company.get('profile'),
                content=f'Hi {student.get("name")}!'
            )
