# Generated by Django 3.2.6 on 2021-09-14 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0002_rename_city_address_student_city'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='email',
            field=models.EmailField(max_length=100, unique=True),
        ),
    ]