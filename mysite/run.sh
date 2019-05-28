#!/bin/bash
docker-compose build
docker-compose up -d
# docker-compose scale redis-slave=2
# docker-compose scale sentinel=3

version: "3"

services:

  db:
    image: mysql:5.7
    environment:
      - MYSQL_HOST=localhost
      - MYSQL_DATABASE=docker
      - MYSQL_USER=root
      - MYSQL_PASSWORD=root
      - MYSQL_ROOT_PASSWORD=root
    volumes:
      - ./data/mysql:/var/lib/mysql
    restart: always

  web:
    build: ./main
    ports:
    - "8000:8000"
    volumes:
    - ./:/mysite
    - /tmp/logs:/tmp
    command: bash start.sh  # 执行命令，有多种格式
    links:
    - db
#    - sentinel
#    - redis-master:redis
    depends_on:
    - db
#    - ui
    restart: always

  nginx:
    build: ./config
    ports:
    - "80:80"
    volumes:
    - ./static:/usr/share/nginx/html/static:ro
    links:
    - web
    depends_on:
    - web
    restart: always

#  ui:
#    image: node:10
#    restart: always
#    working_dir: "/opt/app"
#    ports:
#      - "18001:8000"
#    volumes:
#      - ./frontend-ui:/opt/app:rw
#    command: sh -c "test -d node_modules && npm run start || (npm install && npm run start)"

#  redis-master:
#    image: redis:latest
#    ports:
#     - 6379:6379
#    restart: always
#
#  redis-slave:
#    image: redis:latest
#    command: redis-server --slaveof master 6379
#    restart: always
#    links:
#    - redis-master:master
#
#  sentinel:
#    build: ./sentinel
#    restart: always
#    links:
#    - redis-master:redis-master
#    - redis-slave