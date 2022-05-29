from django.contrib import admin
from .models import Profile, Group, Items, Question, Answers

admin.site.register(Profile)
admin.site.register(Items)
admin.site.register(Question)
admin.site.register(Answers)
