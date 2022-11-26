from Organizer.models import *
from rest_framework import serializers


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = '__all__'
        depth = 2


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ["task_id", "name", "done", 'datetime']
        fields = '__all__'
        depth = 1


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ["type_id", "name", "priority"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]


class LoginRequestSerializer(serializers.ModelSerializer):
    model = User
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)