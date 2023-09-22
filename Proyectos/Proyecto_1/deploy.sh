#!/bin/bash

if [[ $1 == "prod" || $1 = "dev" ]] && [[ $2 = "up" || $2 = "down" ]]; then
    file=""
    if [[ $1 == "prod" ]]; then
        file="docker-compose.yml"
    else
        file="docker-compose-dev.yml"
    fi

    echo "Running docker compose -f ${file} ${2}"
    docker compose -f $file $2
else
    echo "Invalid arguments need to follow the format: ./deploy.sh <prod|dev> <up|down>"
fi