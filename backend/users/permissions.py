from rest_framework.permissions import BasePermission
from .enums import student_type_options


class IsStudent(BasePermission):
    """
    Allow access to students users only
    """

    def has_permission(self, request, view):
        return bool(request.user and request.user.user_type in student_type_options)
