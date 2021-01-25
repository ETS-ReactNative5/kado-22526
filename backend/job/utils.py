def validate_search_params(params):
    allowed_params = ['job_category', 'job_type', 'start_date', 'end_date', 'location', 'min_pay', 'max_pay']
    validated_params = {}
    for param in allowed_params:
        if param in params.keys():
            validated_params[param] = params.get(param)
    return validated_params
