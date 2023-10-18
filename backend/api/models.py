from django.db import models

# Create your models here.
class Person(models.Model):
    path_file = models.CharField(max_length=30)
    
    def __repr__(self):
        return "TEST"
        
    def __str__ (self):
        return f"{self.path_file}"

  