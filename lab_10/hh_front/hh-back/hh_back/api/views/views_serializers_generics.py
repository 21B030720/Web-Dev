from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework import generics


class CompanyAll(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancy(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = VacancySerializer
    def get_queryset(self):
        company_id = self.kwargs['id']
        # company = get_object_or_404(Company, id=company_id)
        company = Company.objects.get(id=id)
        return company.vacancies.all()


class VacancyAll(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView, generics.CreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
