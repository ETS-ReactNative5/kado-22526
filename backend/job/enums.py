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


job_type_options = [{'name': item.name, 'value': item.value} for item in JobTypeEnum]
job_category_options = [{'name': item.name, 'value': item.value} for item in JobCategoryEnum]
job_experience_level_options = [{'name': item.name, 'value': item.value} for item in JobsExperienceLevelEnum]
