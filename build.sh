#!/bin/bash

if [ -f ./todoist-with-aws-lambda-sample-add-todo.zip ]; then
  rm ./todoist-with-aws-lambda-sample-add-todo.zip
fi

yarn install --production

zip -r ./todoist-with-aws-lambda-sample-add-todo.zip . -x "./.git/*" ".DS_Store" ".gitignore" "build.sh"
