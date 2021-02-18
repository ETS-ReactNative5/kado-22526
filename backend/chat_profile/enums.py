from enum import Enum


class WorkTypeEnum(Enum):
    """
    work type enum
    part time; full time; remote; one time project; ongoing project
    """
    part_time = 'Part-time'
    full_time = 'Full-time'
    remote = 'Remote'
    one_time = 'One Time Project'
    ongoing_project = 'Ongoing Project'
    short_term_project = 'Short-term Project'
    long_term_project = 'Long-term Project'


class AvailabilityDurationEnum(Enum):
    less_than_two_weeks = 'Less than 2 weeks'
    two_to_four_weeks = '2-4 weeks'
    more_than_four_weeks = 'More than 4 weeks'


class TimePerWeekRange(Enum):
    less_than_10_hours = 'Less than 10 hours'
    ten_to_twenty_hours = '10-20 hours'
    more_than_20_hours = 'More than 20 hours'


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
