# Generated by Django 3.2.6 on 2021-09-05 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='professor_guide',
            field=models.CharField(choices=[('Mr Doe', 'Mr Doe'), ('Mr Clay', 'Mr Clay'), ('Ms Davis', 'Ms Davis'), ('Ms Roberts', 'Ms Roberts'), ('Mr Peters', 'Mr Peters')], max_length=50),
        ),
    ]