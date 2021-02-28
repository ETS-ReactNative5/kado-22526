from enum import Enum


class JobsExperienceLevelEnum(Enum):
    beginner = 'Beginner'
    intermediate = 'Intermediate'
    expert = 'Expert'


class JobCategoryEnum(Enum):
    service = 'Service'
    project = 'Project'


class JobTypeEnum(Enum):
    part_time = 'Part-time'
    full_time = 'Full-time'
    remote = 'Remote'
    one_time = 'One-time Project'
    ongoing_project = 'Ongoing Project'


class BudgetTypeEnum(Enum):
    fixed_price = 'Fixed Price'
    per_hour = 'Per Hour'
    negotiable = 'Negotiable'


class JobDurationEnum(Enum):
    less_than_two_weeks = 'Less than 2 weeks'
    two_to_four_weeks = '2 to 4 weeks'
    more_than_four_weeks = 'More than 4 weeks'


class JobTimeEnum(Enum):
    less_than_10_hours = 'Less than 10 hours/week'
    ten_to_twenty_hours = '10-20 hours/week'
    more_than_twenty_hours = 'More than 20 hours/week'


job_type_options = [{'name': item.name, 'value': item.value} for item in JobTypeEnum]
job_category_options = [{'name': item.name, 'value': item.value} for item in JobCategoryEnum]
job_experience_level_options = [{'name': item.name, 'value': item.value} for item in JobsExperienceLevelEnum]
