from django.urls import path, re_path
from api import views
from api import views
urlpatterns = [
    # path('companies', views.companyWork),
    path('companies', views.CompanyClass.as_view()),
    path('companies/<int:pk>/', views.CompanyDetail.as_view()),
    # path('companies/<int:id>/vacancies/', views.companyDetailVacancyGet),
    path('companies/<int:id>/vacancies/', views.companyDetailVacancyGet),
    # path('companies/insert', views.companyInsert),



    # path('vacancies/', views.vacancyWork),
    path('vacancies/', views.VacancyAll.as_view()),
    # path('vacancies/<int:id>/', views.vacancyWork),
    path('vacancies/<int:id>/', views.vacancyWork),
    path('vacancies/top_ten/', views.vacancySortedGet),

]