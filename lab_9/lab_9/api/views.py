from django.shortcuts import render
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
import json
"""
    name: models.CharField()
    description: models.TextField()
    city: models.CharField()
    address: models.TextField()
"""
companies = [
    {
        'name': f"{_id}",
        'description': "Description",
        'city': "Karaganda",
        'address': 'Multimillioneer',
        # 'id': _id,
        # 'name': f'Product {_id}',
        # 'price': _id * 1000
    }
    for _id in range(1, 10)
]
"""
    name: models.CharField()
    description: models.TextField()
    salary: models.FloatField()
    company: models.ForeignKey()
"""
vacancies = [
    {
        'name': f"{_id*_id}",
        'description': "Description",
        'salary': _id*_id/2,
        'company': f"{_id}",
    }
    for _id in range(1, 10)
]


# Insert Values
#
#
#
#
#
#
def companyInsert(request):
    for company in companies:
        m = Company(name = company['name'], description = company['description'],
                    city = company['city'], address = company['address'])
        m.save()
    return HttpResponse(f"<h1>Hello</h1>")
def vacancyInsert(request, id):
    for vacancy in vacancies:
        company = Company.objects.get(id=id)
        # company = company.to_json()
        m = Vacancy(name = vacancy['name'], description = vacancy['description'],
                    salary = vacancy['salary'], company = company)
        m.save()
    return HttpResponse(f"<h1>Hello</h1>")

# Company
#
#
#
#
#
#
def companyGet(request):
    companies = Company.objects.all()
    companies_json = [p.to_json() for p in companies]
    return JsonResponse(companies_json, safe=False)
def companyDetailGet(request, id):
    company = Company.objects.get(id=id)
    return JsonResponse(company.to_json(), safe=False)
def companyDetailVacancyGet(request, id):
    company = Company.objects.get(id=id)
    # company = company.to_json()
    vacancies = Vacancy.objects.filter(company_id = company)
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json, safe=False)
#
#
#
#
def vacancysGet(request):
    vacancies = Vacancy.objects.all()
    companies_json = [p.to_json() for p in vacancies]
    return JsonResponse(companies_json, safe=False)
def vacancyDetailGet(request, id):
    vacancy = Vacancy.objects.get(id=id)
    # vacancy_json =  [p.to_json() for p in vacancy]
    return JsonResponse(vacancy.to_json(), safe=False)
def vacancySortedGet(request):
    vacancies = Vacancy.objects.all().order_by('-salary')

    companies_json = [p.to_json() for p in vacancies]
    return JsonResponse(companies_json, safe=False)
# changed Company
#
#
#
#
#
#
@csrf_exempt
def companyWork(request, id = 0):
    if(request.method == "GET"):
        if(not id):
            company = Company.objects.all()
            companies_json = [p.to_json() for p in company]
            return JsonResponse(companies_json, safe=False)
        else:
            company = Company.objects.get(id=id)
            return JsonResponse(company.to_json(), safe=False)
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
            vacancy = Vacancy.objects.all()
            vacancy_json = [p.to_json() for p in vacancy]
            return JsonResponse(vacancy_json, safe=False)
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
        element = Vacancy.objects.create(name = name, description = des, salary = salary, company = company)
        return JsonResponse(element.to_json())
