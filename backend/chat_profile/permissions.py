from rest_framework.permissions import BasePermission
from .enums import student_type_options, company_type_options


class IsStudent(BasePermission):
    """
    Allow access to students users only
    """

    def has_permission(self, request, view):
        if hasattr(request.user, 'profile'):
            return bool(request.user.profile and request.user.profile.user_type in student_type_options)
        return False


class IsCompany(BasePermission):
    """
    Allow access to company users only
    """

    def has_permission(self, request, view):
        if hasattr(request.user, 'profile'):
            return bool(request.user.profile and request.user.profile.user_type in company_type_options)
        return False
