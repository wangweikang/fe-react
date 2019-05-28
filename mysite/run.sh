#!/bin/bash
docker-compose build
docker-compose up -d
# docker-compose scale redis-slave=2
# docker-compose scale sentinel=3