from abc import ABC

from rest_framework import serializers
from rest_framework_jwt.serializers import User

from api.models import File, Course, Link, Note


class CourseSerializer(serializers.Serializer):
    name = serializers.CharField()
    short_name = serializers.CharField()

    def create(self, validated_data):
        course = Course()
        course.name = validated_data.get('name', 'default name')
        course.short_name = validated_data.get('short_name', 'default name')
        course.save()
        return course

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.short_name = validated_data.get('short_name', instance.short_name)
        instance.save()
        return instance


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ('id', 'name', 'file', 'course')


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('id', 'name', 'link', 'description', 'course')


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'note', 'course')


class NoteSerializer2(serializers.Serializer):
    note = serializers.CharField()
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    def create(self, validated_data):
        note = Note()
        note.name = validated_data.get('note', 'def note')
        note.course = validated_data.get('course')
        note.save()
        return note


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
