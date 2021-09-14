from django.db import models
from audit.mixins import AuditMixin

# Create your models here.
GENDER_CHOICES = (
    (u'female', u'Male'),
    (u'male', u'Female'),
)

class Professor(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return 'Professor %s ' % self.name

class City(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class StudentGroup(AuditMixin, models.Model):    
    name = models.CharField(max_length=50, unique=True)
    professor_guide = models.ForeignKey(Professor, unique=True, on_delete=models.DO_NOTHING)
        
    def __str__(self):
        return 'Group %s ' % self.name

class Student(AuditMixin, models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    email = models.EmailField(max_length = 100, unique=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    birth_date = models.DateField('birthday date')
    group = models.ForeignKey(StudentGroup, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

