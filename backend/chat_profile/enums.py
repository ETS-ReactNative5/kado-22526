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
