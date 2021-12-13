#!/bin/bash

# clean cache
docker system prune --volumes
# force remove container
docker rm -f sts-service
# force remove image
docker rmi -f sts-service
# build image
docker build -t sts-service .
# run container
docker run -d -p 8000:8000 --name sts-service sts-service
