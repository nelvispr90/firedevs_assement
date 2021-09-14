from django import forms
from django.forms import ModelForm, DateInput, TextInput, NumberInput, Select, EmailInput
# from django.forms import modelform_factory, fields_for_model
from .models import StudentGroup, Student
from django.core.exceptions import ValidationError

# group_fields=fields_for_model(Group)
# GroupForm = modelform_factory(model=Group,fields=group_fields,exclude={})

# Student Form
# student_fields=fields_for_model(Student)
# student_widgets={}

# for (k,v) in student_fields.items() :
#     if k == 'age':
#         v.widget.attrs['max']='100'
#         v.widget.attrs['min']='5'
#     v.widget.attrs['class']='form-control'
#     student_widgets[k]=v.widget

# StudentForm = modelform_factory(model=Student,fields=student_fields,exclude={},widgets=student_widgets)

# class StudentForm(forms.Form):
#     name=forms.CharField()
    
class StudentForm(ModelForm):
    class Meta:
        model = Student
        fields = '__all__'
        widgets = {
            'name': TextInput(attrs={'class':'form-control'}),
            'age': NumberInput(attrs={'class':'form-control', 'min':5,'max':100}),
            'gender': Select(attrs={'class':'form-control'}),
            'email': EmailInput(attrs={'class':'form-control'}),
            'city': Select(attrs={'class':'form-control'}),
            'birth_date': DateInput(attrs={'type': 'date', 'class':'form-control'}),
            'group': Select(attrs={'class':'form-control'}),
        }
        
    def clean_age(self):
        age = self.cleaned_data.get('age')
        if (age < 5) or (age > 100):
            raise ValidationError("This value must be between 5 and 100.")
        return age
    
class GroupForm(ModelForm):
    class Meta:
        model = StudentGroup
        fields = '__all__'
        widgets = {
            'name': TextInput(attrs={'class':'form-control'}),
            'professor_guide': Select(attrs={'class':'form-control'}),
        }
        
    