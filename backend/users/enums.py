from enum import Enum


class StudentEnum(Enum):
    undergraduate = 'Undergraduate Students “u/s”'
    graduate = 'Graduate Students “g/s”'
    international = 'International Students “i/s”'


class CompanyEnum(Enum):
    companies = 'Companies “c”'
    start_up = 'Start-ups “s”'


student_type_options = [student.name for student in StudentEnum]
company_type_options = [company.name for company in CompanyEnum]
