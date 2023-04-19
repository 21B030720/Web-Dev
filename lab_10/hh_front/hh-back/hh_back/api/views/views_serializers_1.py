from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework import status
import json
@csrf_exempt
def companyWork(request, id = 0):
    if(request.method == "GET"):
        if(not id):
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True)
            return JsonResponse(serializer.data, safe=False)
        else:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return JsonResponse(serializer.data, safe=False)
    elif(request.method == "POST" and id == 0):
        # category = Company.objects.create(name='1', description='2', city='3', address='4')
        # return JsonResponse(category.to_json())

        data = json.loads(request.body)
        print(request.body)
        name = data.get('name', '')
        des = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')
        # print(name, des, city, address)
        company = Company.objects.create(name = name, description = des, city = city, address = address)
        return JsonResponse(company.to_json())
    elif(request.method == "PUT" and id != 0):
        company = Company.objects.get(id=id)
        data = json.loads(request.body)
        name = data.get('name', '')
        des = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')
        company = Company(name=name, description=des, city=city, address=address)
        company.save()
        return JsonResponse(company.to_json())
    elif(request.method == "DELETE" and id != 0):
        company = Company.objects.get(id=id)
        company.delete()
        return JsonResponse({'deleted': True})
@csrf_exempt
def vacancyWork(request, id = 0):
    if(request.method == "GET"):
        if(not id):
            vacancies= Vacancy.objects.all()
            serializer = VacancySerializer(vacancies, many=True)
            return JsonResponse(serializer.data, safe=False)
        else:
            vacancy = Vacancy.objects.get(id=id)
            return JsonResponse(vacancy.to_json(), safe=False)
    elif(request.method == "POST"):
        # category = Company.objects.create(name='1', description='2', city='3', address='4')
        # return JsonResponse(category.to_json())

        data = json.loads(request.body)
        print(request.body)
        name = data.get('name', '')
        des = data.get('description', '')
        salary = data.get('salary', '')
        company = Company.objects.get(id=id)
        # company = company.to_json()
        element = Vacancy.objects.create(name=name, description=des, salary=salary, company=company)
        return JsonResponse(element.to_json())