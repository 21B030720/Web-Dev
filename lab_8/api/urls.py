from django.contrib import admin
from django.urls import path, re_path
from api import views
urlpatterns = [
    path('products/', views.allproductsGet),
    path('products/<int:productId>/', views.certainProductGet),
    path('insertProduct/', views.productInsert),

    path('insertCategory/', views.categoryInsert),
    path('categories/', views.allcategoriessGet),
    path('categories/<int:id>/', views.certainCategoryGet),
    path('categories/<int:id>/products/', views.categoryProductGet),
]