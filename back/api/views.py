from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status, viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.serializers import User

from api.models import File, Course, Link, Note
from api.serializers import FileSerializer, CourseSerializer, LinkSerializer, NoteSerializer, UserSerializer


class Courses(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class Files(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer


class Notes(generics.ListCreateAPIView):
  queryset = Note.objects.all()
  serializer_class = NoteSerializer
#   permission_classes = (IsAuthenticated,)


class Links(generics.ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer


class CourseFiles(APIView):

    def get(self, request, short_name):
        files = File.objects.filter(course=short_name)
        serializer = FileSerializer(files, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CourseLinks(APIView):

    def get(self, request, short_name):
        links = Link.objects.filter(course=short_name)
        serializer = LinkSerializer(links, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def course_detail(request, short_name):
    try:
        course = Course.objects.get(short_name=short_name)
        serializer = CourseSerializer(course)
        return JsonResponse(serializer.data, safe=False)

    except Exception as e:
        return Response({'error': str(e)})


@api_view(['GET', 'POST'])
def courseNotes(request, short_name):
    if request.method == 'GET':
        notes = Note.objects.filter(course=short_name)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CourseNotes(APIView):

    def get(self, request, short_name):
        notes = Note.objects.filter(course=short_name)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request, short_name=False):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, short_name):
        notes = Note.objects.get(course=short_name)
        serializer = NoteSerializer(instance=notes, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.error_messages})


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class Users(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
