from rest_framework.views import APIView
from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from api.serializers import CompanySerializer
from rest_framework.response import Response
from rest_framework import status
from django import forms

class CompanyClass(APIView):
    def get(self, request, format=None, id = 0):
        if(id == 0):
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True)
            return Response(serializer.data)
        else:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return Response(serializer.data)
    def put(self, request, id, format=None):
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company, data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def post(self, request, format=None):
        serializer = CompanySerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id, format=None):
        company = Company.objects.get(id=id)
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)