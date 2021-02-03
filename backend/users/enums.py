from enum import Enum


class UserGroups(Enum):
    company = 'company'
    student = 'student'


user_groups = [group.name for group in UserGroups]
