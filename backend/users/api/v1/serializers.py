from rest_framework import serializers
from users.models import User


class PrivateField(serializers.ReadOnlyField):

    def get_attribute(self, instance):
        """
        Given the *outgoing* object instance, return the primitive value
        that should be used for this field.
        """
        if instance == self.context['request'].user:
            return super(PrivateField, self).get_attribute(instance)
        return None


class UserSerializer(serializers.ModelSerializer):
    email = PrivateField()
    user_type = PrivateField()
    is_staff = PrivateField()

    class Meta:
        model = User
        fields = ("id", "username", "first_name", "last_name", "is_staff", "user_type", "email")
