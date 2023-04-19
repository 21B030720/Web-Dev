# from django.shortcuts import render
# from api.models import Company, Vacancy
# from django.http.response import HttpResponse, JsonResponse
# # Create your views here.
# """
#     name: models.CharField()
#     description: models.TextField()
#     city: models.CharField()
#     address: models.TextField()
# """
# companies = [
#     {
#         'name': f"{_id}",
#         'description': "Description",
#         'city': "Karaganda",
#         'address': 'Multimillioneer',
#         # 'id': _id,
#         # 'name': f'Product {_id}',
#         # 'price': _id * 1000
#     }
#     for _id in range(1, 10)
# ]
# """
#     name: models.CharField()
#     description: models.TextField()
#     salary: models.FloatField()
#     company: models.ForeignKey()
# """
# vacancies = [
#     {
#         'name': f"{_id*_id}",
#         'description': "Description",
#         'salary': _id*_id/2,
#         'company': f"{_id}",
#     }
#     for _id in range(1, 10)
# ]
#
#
# # Insert Values
# #
# #
# #
# #
# #
# #
# def companyInsert(request):
#     for company in companies:
#         m = Company(name = company['name'], description = company['description'],
#                     city = company['city'], address = company['address'])
#         m.save()
# def vacancyInsert(request):
#     for vacancy in vacancies:
#         m = Company(name = vacancy['name'], description = vacancy['description'],
#                     salary = vacancy['salary'], company = vacancy['company'])
#         m.save()
#
# # Company
# #
# #
# #
# #
# #
# #
# def companyGet(request):
#     companies = Company.objects.all()
#     companies_json = [p.to_json() for p in companies]
#     return JsonResponse(companies_json, safe=False)
# def companyDetailGet(request, id):
#     company = Company.objects.get(id=id)
#     return JsonResponse(company.to_json, safe=False)
# def companyDetailVacancyGet(request, id):
#     company = Company.objects.get(id=id)
#     company = company.to_json()
#     vacancies = Vacancy.objects.filter(name = company['name'])
#     vacancies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(vacancies_json, safe=False)
# def vacancysGet(request):
#     vacancies = Company.objects.all()
#     companies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(companies_json, safe=False)
# def vacancyDetailGet(request):
#     vacancy = Company.objects.get(id=id)
#     return JsonResponse(vacancy.to_json, safe=False)
# def vacancySortedGet(request):
#     vacancies = Company.objects.all().order_by('-salary')
#     companies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(companies_json, safe=False)