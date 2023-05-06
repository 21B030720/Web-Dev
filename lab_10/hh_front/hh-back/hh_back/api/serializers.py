from rest_framework import serializers
from api.models import Company, Vacancy

# name = models.CharField(max_length=255)
# description = models.TextField()
# city = models.CharField(max_length=255)
# address = models.TextField()
class CompanySerializer(serializers.ModelSerializer):
    # name = serializers.CharField()
    # description = serializers.CharField()
    # address = serializers.CharField()
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'address')

#  name = models.CharField(max_length=255)
# description = models.TextField()
# salary = models.FloatField()
# company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name = 'vacancies')
class VacancySerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()

    # class Meta:
    #     model = Vacancy
    #     fields = ('id', 'name', 'description', 'salary', 'company')