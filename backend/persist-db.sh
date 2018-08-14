#!/bin/bash

docker-compose exec mariadb sh -c 'exec mysqldump -udrupal -p"drupal" drupal' > db/dump.sql
