from .enums import student_type_options, company_type_options
from users.enums import UserGroups

QUERY_CONTAINMENT = '__icontain'


def validate_profile_search_params(params):
    allowed_params = [
        'pin', 'company_name', 'location', 'min_pay', 'max_pay',
        'work_type', 'allowed_to_work',
    ]
    validated_params = {}
    # allow users to filter students & companies
    profile_type = params.get('profile_type', None)
    if profile_type:
        validated_params['user__groups__name__contains'] = profile_type

    for param in allowed_params:
        if param in params.keys():
            validated_params[param + QUERY_CONTAINMENT] = params.get(param)
    return validated_params
