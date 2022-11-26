from django.db import models
from django.contrib.auth.models import User


class Type(models.Model):
    type_id = models.AutoField(db_column='type_id', primary_key=True)
    name = models.CharField(db_column='name', max_length=100, unique=True)
    priority = models.IntegerField(db_column='priority', default=0, null=True)
    def __str__(self):
        return self.name


class Discipline(models.Model):
    discipline_id = models.AutoField(db_column='discipline_id', primary_key=True)
    name = models.CharField(db_column='name', max_length=100, unique=True)
    priority = models.IntegerField(db_column='priority', default=0, null=True)
    def __str__(self):
        return self.name


class Task(models.Model):
    task_id = models.AutoField(db_column='task_id', primary_key=True)
    name = models.CharField(db_column='name', max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    discipline_id = models.ForeignKey(Discipline, on_delete=models.CASCADE)
    type_id = models.ForeignKey(Type, on_delete=models.CASCADE)
    done = models.BooleanField(db_column='done', default=False)
    datetime = models.DateTimeField(db_column='datetime', null=True)
    def __str__(self):
        return self.name
