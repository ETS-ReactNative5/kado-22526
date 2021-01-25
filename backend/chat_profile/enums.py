from enum import Enum


class WorkTypeEnum(Enum):
    """
    work type enum
    part time; full time; remote; one time project; ongoing project
    """
    part_time = 'Part Time'
    full_time = 'Full Time Project'
    remote = 'Remote'
    one_time = 'One Time Project'
    ongoing_project = 'Ongoing Project'


class StudentEnum(Enum):
    undergraduate = 'Undergraduate Students “u/s”'
    graduate = 'Graduate Students “g/s”'
    international = 'International Students “i/s”'


class CompanyEnum(Enum):
    companies = 'Companies “c”'
    start_up = 'Start-ups “s”'


student_type_options = [student.name for student in StudentEnum]
company_type_options = [company.name for company in CompanyEnum]

all_profile_type_options = [{'name': item.name, 'value': item.value} for item in StudentEnum] + [
    {'name': item.name, 'value': item.value} for item in StudentEnum]
work_type_options = [{'name': item.name, 'value': item.value} for item in WorkTypeEnum]
