from django.db import models
from django.forms import modelform_factory, fields_for_model, models as m
from audit.mixins import AuditMixin

# Create your models here.
GENDER_CHOICES = (
    (u'M', u'Male'),
    (u'F', u'Female'),
)

CITY_CHOICES = (
    (u'Havana', u'Havana'),
    (u'New York', u'New York'),
    (u'Madrid', u'Madrid'),
    (u'London', u'London'),
    (u'Paris', u'Paris'),
)

PROFESSOR_CHOICES = (
    (u'Mr Doe', u'Mr Doe'),
    (u'Mr Clay', u'Mr Clay'),
    (u'Ms Davis', u'Ms Davis'),
    (u'Ms Roberts', u'Ms Roberts'),
    (u'Mr Peters', u'Mr Peters'),
)
class Group(AuditMixin, models.Model):
    name = models.CharField(max_length=50, unique=True)
    professor_guide = models.CharField(max_length = 50, choices = PROFESSOR_CHOICES)
    
        
    def __str__(self):
        return "Group %s " % self.name

class Student(AuditMixin, models.Model):
    # textInput = TextInput(attrs={'class':'from-control'})
    name = models.CharField(max_length=200)
    
    age = models.IntegerField()
    gender = models.CharField(max_length=2, choices=GENDER_CHOICES)
    email = models.EmailField(max_length = 50, unique=True)
    city_address = models.CharField(max_length=50, choices=CITY_CHOICES)
    birth_date = models.DateField('birthday date')
    group = models.ForeignKey(Group, on_delete=models.CASCADE)

    def __str__(self):
        return "Student %s " % self.name
