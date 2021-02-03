from chat_profile.models import Profile
from users.models import User
from kado_22526.utils import update_object

DEFAULT_PASSWORD = '12345678'
MAN_PHOTO = 'https://randomuser.me/api/portraits/men/'
WOMAN_PHOTO = 'https://randomuser.me/api/portraits/women/'
DEFAULT_UNIVERSITY = 'Harvard University'
STUDENT_BIO = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
DEFAULT_BIO = """
International Business Machines Corporation is an American multinational technology and consulting company 
headquartered in Armonk, New York, with more than 350, 000 employess serving clients in 170 contries.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
"""
USERS = [
    {
        'user': {
            'username': 'IBM',
            'first_name': 'IBM',
            'last_name': '',
            'email': 'ibm@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California, USA',
            'tagline': '',
            'company_name': 'IBM',
            'photo': 'https://empresa-journal.com/wp-content/uploads/2018/07/IBM-Logo.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'Twitter',
            'first_name': 'Twitter',
            'last_name': '',
            'email': 'twitter@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California, USA',
            'tagline': '',
            'company_name': 'Twitter',
            'photo': 'https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'New-York-Times',
            'first_name': 'New York Times',
            'last_name': '',
            'email': 'ney-york-times@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': '',
            'company_name': 'New York Times',
            'photo': 'https://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'HP',
            'first_name': 'HP',
            'last_name': '',
            'email': 'hp@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': '',
            'company_name': 'HP',
            'photo': 'https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'Carrefour',
            'first_name': 'Carrefour',
            'last_name': '',
            'email': 'carrefour@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': '',
            'company_name': 'Carrefour',
            'photo': 'https://www.clipartmax.com/png/full/302-3027644_quand-tas-rien-compris-au-logo-de-carrefour-carrefour.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'EROSKI',
            'first_name': 'EROSKI',
            'last_name': '',
            'email': 'eroski@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'companies',
            'bio': DEFAULT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': '',
            'company_name': 'EROSKI',
            'photo': 'https://pbs.twimg.com/profile_images/1214914494813618176/4oYlKZVB_400x400.png',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_alena',
            'first_name': 'Alena',
            'last_name': 'Smith',
            'email': 'alena@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'Senior JS Developer',
            'company_name': '',
            'photo': f'{WOMAN_PHOTO}1.jpg',
            'gender': 'Female',
            'university': DEFAULT_UNIVERSITY,
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_courtney',
            'first_name': 'Courtney',
            'last_name': 'Henry',
            'email': 'courtney@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'Graphic Designer',
            'company_name': '',
            'photo': f'{WOMAN_PHOTO}2.jpg',
            'gender': 'Female',
            'university': DEFAULT_UNIVERSITY,
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_savannah',
            'first_name': 'Savannah',
            'last_name': 'Nguyen',
            'email': 'savannah@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'Content Writer',
            'company_name': '',
            'photo': f'{WOMAN_PHOTO}3.jpg',
            'gender': 'Female',
            'university': DEFAULT_UNIVERSITY,
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_cody',
            'first_name': 'Cody',
            'last_name': 'Fisher',
            'email': 'cody@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'Videographer',
            'company_name': '',
            'photo': f'{MAN_PHOTO}1.jpg',
            'gender': 'Male',
            'university': DEFAULT_UNIVERSITY,
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_jane',
            'first_name': 'Jane',
            'last_name': 'Cooper',
            'email': 'jane@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'wordpress Long-term dev',
            'company_name': '',
            'photo': f'{WOMAN_PHOTO}2.jpg',
            'gender': 'Male',
            'university': DEFAULT_UNIVERSITY,
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
    {
        'user': {
            'username': 'test_albert',
            'first_name': 'Albert',
            'last_name': 'Flores',
            'email': 'albert@kado-dev.com',
            'password': '12345678'
        },
        'profile': {
            'user': None,
            'profile_type': 'undergraduate',
            'bio': STUDENT_BIO,
            'mobile_number': '+14842918369',
            'location': 'Corona, California',
            'tagline': 'Wordpress Long-term dev',
            'company_name': '',
            'photo': f'{MAN_PHOTO}5.jpg',
            'gender': 'Male',
            'university': '',
            'field_of_study': '',
            'skills': ['Website Redesign', 'Website Development'],
            'years_of_experience': 4,
            'work_type': 'full_time',
            'allowed_to_work': True
        }
    },
]


def create_users():
    for obj in USERS:
        user = update_object(User(), obj.get('user'))
        user.set_password(DEFAULT_PASSWORD)
        user.save()
        obj['profile']['user'] = user

        update_object(Profile(user=user), obj.get('profile'))
