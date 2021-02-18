from .enums import student_type_options, company_type_options
from users.enums import UserGroups

QUERY_CONTAINMENT = '__icontains'


def validate_profile_search_params(params):
    allowed_params = [
        'pin', 'company_name', 'location',
        'work_type', 'allowed_to_work', 'availability'
    ]
    validated_params = {}
    # allow users to filter students & companies
    profile_type = params.get('profile_type', None)
    work_type = params.get('work_types', None)
    min_pay = params.get('min_pay', None)
    max_pay = params.get('max_pay', None)
    if profile_type:
        validated_params['user__groups__name__contains'] = profile_type
    if work_type:
        validated_params['work_types__overlap'] = [work_type]
    if min_pay:
        validated_params['min_pay__gte'] = min_pay
    if max_pay:
        validated_params['max_pay__lte'] = max_pay


    for param in allowed_params:
        if param in params.keys():
            validated_params[param + QUERY_CONTAINMENT] = params.get(param)
    return validated_params
