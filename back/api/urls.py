import rest_framework
from django.urls import path, re_path, include
from rest_framework import routers

from rest_framework_jwt.views import obtain_jwt_token

from api import views
from api.views import Files, CourseFiles, Courses, Links, course_detail, CourseLinks, Notes, CourseNotes, UserViewSet, \
    Users, courseNotes

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('files/', Files.as_view()),
    path('users/', Users.as_view()),
    path('courses/', Courses.as_view()),
    path('courses/<str:short_name>/files/', CourseFiles.as_view()),
    path('courses/<str:short_name>/links/', CourseLinks.as_view()),
    path('courses/<str:short_name>/', course_detail),
    path('notes/', Notes.as_view()),
    path('courses/<str:short_name>/notes/', courseNotes),
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
