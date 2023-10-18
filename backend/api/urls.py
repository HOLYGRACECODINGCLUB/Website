from django.urls import path
from .views import PersonView,front


urlpatterns = [
    path('api',PersonView.as_view()),
    path('',front,name="front"),

]
