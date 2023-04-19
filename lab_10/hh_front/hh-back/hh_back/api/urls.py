from django.urls import path, re_path
from api import views
from api import views
urlpatterns = [
    # path('companies/', views.companyGet),
    # path('companies/<int:id>/', views.companyDetailGet),
    path('companies', views.companyWork),
    path('companies/<int:id>/', views.ComapnyDetail.as_view()),
    path('companies/<int:id>/vacancies/', views.companyDetailVacancyGet),
    # path('companies/insert', views.companyInsert),

    # path('vacancies/', views.vacancysGet),
    # path('vacancies/<int:id>/', views.vacancyDetailGet),
    path('vacancies/', views.vacancyWork),
    path('vacancies/<int:id>/', views.vacancyWork),
    path('vacancies/top_ten/', views.vacancySortedGet),
    # path('vacancies/insert/<int:id>/', views.vacancyInsert),
]