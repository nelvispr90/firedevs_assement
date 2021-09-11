from django.contrib import admin

# Register your models here.
from .models import Group, Student, Professor, City

admin.site.register(Group)
admin.site.register(Student)
admin.site.register(Professor)
admin.site.register(City)