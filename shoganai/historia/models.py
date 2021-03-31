from django.db import models

# Create your models here.
class Historia(models.Model):
    event  = models.CharField(max_length=100)
    description = models.TextField()