#!/bin/bash

BRANCH=$1
STEP=1

while [ $STEP -le 14 ]
do
  echo $STEP
  git checkout $STEP
  git merge $1 --no-edit
  ((STEP++))
done
