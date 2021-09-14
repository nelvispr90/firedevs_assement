from django.urls import path
from students import views

urlpatterns = [
    path('', views.home, name='home'),
    
    # student url
    path('student/list', views.list_students, name='student_list'),
    path('student/new', views.create_student, name='student_new'),
    path('student/edit/<int:id>', views.update_student, name='student_edit'),
    path('student/detail/<int:id>', views.detail_student, name='student_detail'),
    path('student/delete/<int:id>', views.delete_student, name='student_delete'),
    path('student/partial_delete/<int:id>', views.partial_delete_student, name='student_partial_delete'),
    
    # group url
    path('group/list', views.list_groups, name='group_list'),
    path('group/new', views.create_group, name='group_new'),
    path('group/edit/<int:id>', views.update_group, name='group_edit'),
    path('group/detail/<int:id>', views.detail_group, name='group_detail'),
    path('group/delete/<int:id>', views.delete_group, name='group_delete'),
    path('group/partial_delete/<int:id>', views.partial_delete_group, name='group_partial_delete'),
    
]
