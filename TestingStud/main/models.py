from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

class Profile(models.Model):
    groupID = models.CharField('Название', max_length=70)
    anons = models.CharField('Тема', max_length=250)
    full_text = models.TextField('Текст вопроса')
    date = models.DateTimeField('Дата публикации', auto_now=True)
    rang = models.IntegerField('Рейтинг', blank=True, null=True)
    comp = models.BooleanField('Решенный', default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/board/{self.id}'

    class Meta:
        db_table = 'profile'
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'

class Group(models.Model):
    groupID = models.CharField('Название', max_length=70)
    anons = models.CharField('Тема', max_length=250)
    full_text = models.TextField('Текст вопроса')
    date = models.DateTimeField('Дата публикации', auto_now=True)
    rang = models.IntegerField('Рейтинг', blank=True, null=True)
    comp = models.BooleanField('Решенный', default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'que'
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'

class Items(models.Model):
    groupID = models.CharField('Название', max_length=70)
    anons = models.CharField('Тема', max_length=250)
    full_text = models.TextField('Текст вопроса')
    date = models.DateTimeField('Дата публикации', auto_now=True)
    rang = models.IntegerField('Рейтинг', blank=True, null=True)
    comp = models.BooleanField('Решенный', default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/board/{self.id}'

    class Meta:
        db_table = 'items'
        verbose_name = 'Предмет'
        verbose_name_plural = 'Предметы'


class Question(models.Model):
    groupID = models.CharField('Название', max_length=70)
    anons = models.CharField('Тема', max_length=250)
    full_text = models.TextField('Текст вопроса')
    date = models.DateTimeField('Дата публикации', auto_now=True)
    rang = models.IntegerField('Рейтинг', blank=True, null=True)
    comp = models.BooleanField('Решенный', default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'question'
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

class Answers(models.Model):
    groupID = models.CharField('Название', max_length=70)
    anons = models.CharField('Тема', max_length=250)
    full_text = models.TextField('Текст вопроса')
    date = models.DateTimeField('Дата публикации', auto_now=True)
    rang = models.IntegerField('Рейтинг', blank=True, null=True)
    comp = models.BooleanField('Решенный', default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Пользователь', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'answer'
        verbose_name = 'Ответ'
        verbose_name_plural = 'Ответы'