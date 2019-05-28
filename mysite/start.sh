#!/bin/bash
pip install --upgrade django&&
python manage.py collectstatic --noinput&&
python manage.py makemigrations&&
python manage.py migrate &&
gunicorn main.wsgi:application -c gunicorn.conf