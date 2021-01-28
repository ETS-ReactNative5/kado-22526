from .enums import student_type_options, company_type_options

QUERY_CONTAINMENT = '__icontain'


def validate_profile_search_params(params):
    allowed_params = [
        'pin', 'company_name', 'location', 'min_pay', 'max_pay',
        'work_type', 'allowed_to_work',
    ]
    validated_params = {}
    # allow users to filter students & companies
    profile_type = params.get('profile_type', None)
    if profile_type == 'student':
        # filter where profile type is graduate, undergraduate or international
        validated_params['profile_type__in'] = student_type_options
    elif profile_type == 'company':
        # filter where profile type is companies or start-ups
        validated_params['profile_type__in'] = company_type_options

    for param in allowed_params:
        if param in params.keys():
            validated_params[param + QUERY_CONTAINMENT] = params.get(param)
    return validated_params
