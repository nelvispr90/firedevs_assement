from django.shortcuts import render
from students.forms import StudentForm, GroupForm
from .models import Student, StudentGroup
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator

# Create your views here.
def home(request):
    return render(request, 'home.html')

# Group views
@login_required
def list_groups(request):
    # groups
    if request.GET.get('something'):
        search_text = request.GET.get('something')
        groups = StudentGroup.objects.filter(name__contains=search_text).order_by('id')
    else:
        groups = StudentGroup.objects.order_by('id')
    
    paginator = Paginator(groups, 40) # Show 40 students per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request,'group/list.html', {'page_obj': page_obj})

 
@login_required
def create_group(request):
    message = None
    
    if request.method == 'POST':
        data = request.POST
        form = GroupForm(data)
                
        if form.is_valid():
            group = form.save()
            message = {'type':'success', 'head':'Info!', 'text':"Saved new student %s" % group}
            
    else:
        form = GroupForm()
        
    return render(request,'group/new.html', {'form': form, 'message': message,})

@login_required
def update_group(request, id):
    message = None
    group = StudentGroup.objects.filter(pk = id)[0]
    
    if request.method == 'POST':
        data = request.POST                
        form = GroupForm(data = data, instance = group)
        if form.is_valid():        
            group = form.save()
            message = {'type':'success', 'head':'Info!', 'text':"Updated group %s" % group}
    else:        
        form = GroupForm(instance=group)
        
    return render(request,'group/edit.html', {'form': form, 'id': id, 'message': message})

@login_required
def detail_group(request, id):
    group = StudentGroup.objects.filter(pk=id)[0]
    return render(request,'group/detail.html', {'group': group})

@login_required
def partial_delete_group(request, id):
    qs = StudentGroup.objects.filter(pk=id)
    
    if len(qs) > 0 :
        group = qs[0]          
        return render(request,'group/delete.html', {'group': group})
    else:
        return render(request,'group/delete.html', {'group': None})
    
@login_required
def delete_group(request, id):
    group = StudentGroup.objects.filter(pk=id)[0]  
    group.delete()    
    return HttpResponseRedirect('/students/student/new')


# Student views
@login_required
def list_students(request):
    # students
    if request.GET.get('something'):
        search_text = request.GET.get('something')
        students = Student.objects.filter(name__contains=search_text).order_by('id')
    else:
        students = Student.objects.order_by('id')
    
    paginator = Paginator(students, 40) # Show 40 students per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request,'student/list.html', {'page_obj': page_obj})

# def search_students(request):
    
 
 
@login_required
def create_student(request):
    message = None
    
    if request.method == 'POST':
        data = request.POST
        form = StudentForm(data)
                
        if form.is_valid():
            student = form.save()
            message = {'type':'success', 'head':'Info!', 'text':"Saved new student %s" % student}
            
    else:
        form = StudentForm()
        
    return render(request,'student/new.html', {'form': form, 'message': message,})

@login_required
def update_student(request, id):
    message = None
    student = Student.objects.filter(pk = id)[0]
    
    if request.method == 'POST':
        data = request.POST                
        form = StudentForm(data = data, instance = student)
        if form.is_valid():        
            student = form.save()
            message = {'type':'success', 'head':'Info!', 'text':"Updated student %s" % student}
    else:        
        form = StudentForm(instance=student)
        
    return render(request,'student/edit.html', {'form': form, 'id': id, 'message': message})

@login_required
def detail_student(request, id):
    student = Student.objects.filter(pk=id)[0]
    return render(request,'student/detail.html', {'student': student})

@login_required
def partial_delete_student(request, id):
    qs = Student.objects.filter(pk=id)
    
    if len(qs) >0 :
        student = qs[0]          
        return render(request,'student/delete.html', {'student': student})
    else:
        return render(request,'student/delete.html', {'student': None})
    
@login_required
def delete_student(request, id):
    student = Student.objects.filter(pk=id)[0]  
    student.delete()    
        # message = {'type':'success', 'head':'Info!', 'text':"Deleted student %s" % student}
    return HttpResponseRedirect('/students/student/new')
