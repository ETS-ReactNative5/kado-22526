from random import randrange

from kado_22526.utils import update_object
from chat_profile.models import Profile
from chat_profile.utils import validate_profile_search_params
from job.models import Job

print(randrange(10))
JOBS = [
    {
        "title": "Word Press (Front end) Developer Need",
        "description": "Experience working with popular WordPress page builders particularly Beaver Builder and Elementor.",
        "skills": ["Website Redesign", "Website Development"],
        "experience_level": "intermediate",  # beginner expert
        "job_category": "service",  # project
        "job_type": "full_time",  # part_time remote one_time ongoing_project
        "start_date": "2021-02-01",
        "end_date": "2021-03-01",
        "hours_per_week": 40,
        "payment_per_hour": 30,
        "field": "",
    },
    {
        "title": "Word Press (Front end) Developer Need",
        "description": "Experience working with popular WordPress page builders particularly Beaver Builder and Elementor.",
        "skills": ["Website Redesign", "Website Development"],
        "experience_level": "expert",  # beginner expert
        "job_category": "project",  # project
        "job_type": "part_time",  # part_time remote one_time ongoing_project
        "start_date": "2021-02-01",
        "end_date": "2021-04-01",
        "hours_per_week": 40,
        "payment_per_hour": 30,
        "field": "",
    },
    {
        "title": "Word Press (Front end) Developer Need",
        "description": "Experience working with popular WordPress page builders particularly Beaver Builder and Elementor.",
        "skills": ["Website Redesign", "Website Development"],
        "experience_level": "expert",  # beginner expert
        "job_category": "service",  # project
        "job_type": "remote",  # part_time remote one_time ongoing_project
        "start_date": "2021-02-01",
        "end_date": "2021-08-01",
        "hours_per_week": 30,
        "payment_per_hour": 40,
        "field": "",
    },
    {
        "title": "Word Press (Front end) Developer Need",
        "description": "Experience working with popular WordPress page builders particularly Beaver Builder and Elementor.",
        "skills": ["Website Redesign", "Website Development"],
        "experience_level": "beginner",  # beginner expert
        "job_category": "project",  # project
        "job_type": "ongoing_project",  # part_time remote one_time ongoing_project
        "start_date": "2021-10-01",
        "end_date": "2021-12-01",
        "hours_per_week": 40,
        "payment_per_hour": 10,
        "field": "",
    },

]


def create_jobs():
    profiles_ids = [p.id for p in
                    Profile.search(None, params=validate_profile_search_params({'profile_type': 'company'}))]
    for job in JOBS:
        owner_id = profiles_ids[randrange(len(profiles_ids) - 1)]

        update_object(Job(owner_id=owner_id), job)
