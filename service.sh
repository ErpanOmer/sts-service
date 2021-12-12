#!/bin/bash
docker rm -f sts-service

docker rmi -f sts-service

docker build -t sts-service .

docker run -d -p 8000:8000 --name sts-service sts-service
