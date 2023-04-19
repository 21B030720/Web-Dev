from django.contrib import admin
from api.models import Company, Vacancy

# name = models.CharField(max_length=255)
# description = models.TextField()
# city = models.CharField(max_length=255)
# address = models.TextField()
@admin.register(Company)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'city', 'address')

# name = models.CharField(max_length=255)
# description = models.TextField()
# salary = models.FloatField()
# company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name = 'vacancies')
@admin.register(Vacancy)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary', 'company')