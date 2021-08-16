from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class Participante(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)