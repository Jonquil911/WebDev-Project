from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Course(models.Model):
    name = models.TextField(max_length=300, default="default name")
    short_name = models.CharField(max_length=50, default="default", unique=True)


class CourseFiles(models.Manager):
    def get_queryset(self):
        return super(CourseFiles, self).get_queryset().filter()


class CourseLinks(models.Manager):
    def get_queryset(self):
        return super(CourseLinks, self).get_queryset().filter()


class File(models.Model):
    name = models.CharField(max_length=300, default="default")
    file = models.FileField(upload_to='files/', validators=[FileExtensionValidator(allowed_extensions=['pdf'])],
                            blank=True,
                            null=True, verbose_name="")
    course = models.ForeignKey(Course, to_field="short_name", on_delete=models.CASCADE, related_name='files',
                               db_column="course")


objects = models.Manager()
course_file = CourseFiles()


class Link(models.Model):
    name = models.CharField(max_length=500, default="default")
    description = models.TextField(default="no description")
    link = models.TextField(default="https://www.google.com")
    course = models.ForeignKey(Course, to_field="short_name", on_delete=models.CASCADE, related_name='links',
                               db_column="course")


objects = models.Manager()
course_link = CourseLinks()


class Note(models.Model):
    note = models.TextField(max_length=2000, default="default")
    course = models.ForeignKey(Course, to_field="short_name", on_delete=models.CASCADE, related_name='notes',
                               db_column="course")
