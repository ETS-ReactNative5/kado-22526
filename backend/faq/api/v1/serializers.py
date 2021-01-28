from rest_framework import serializers

from kado_22526.utils import update_object
from faq.models import Faq


class FaqSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Faq
        fields = "__all__"

    def get_user(self, obj):
        return obj.user.id

    def create(self, validated_data):
        user = self.context.get('request').user
        faq = Faq(user=user)
        updated_faq = update_object(faq, validated_data)
        return updated_faq

    def update(self, instance, validated_data):
        user = self.context.get('request').user
        if user.id == instance.user.id or user.is_superuser:
            updated_instance = update_object(instance, validated_data)
            return updated_instance
        raise serializers.ValidationError(
            {"error": "You don't have permission to edit this FAQ."}
        )
