from django.db import models

class Company(models.Model):
    # salary = models.IntegerField()
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    # def __str__(self):
    #     return f" The name: {self.name}, The description: {self.description}, The city: {self.city}, The address: {self.address}"
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name = 'vacancies')
    # def __str__(self):
    #     return f" The name: {self.name}, The description: {self.description}, The salary: {self.salary}, The company: {self.company}"
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            # 'company': self.company,
        }

