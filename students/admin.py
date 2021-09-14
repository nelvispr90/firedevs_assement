from django.contrib import admin

# Register your models here.
from .models import StudentGroup, Student, Professor, City

admin.site.register(StudentGroup)
admin.site.register(Student)
admin.site.register(Professor)
admin.site.register(City)