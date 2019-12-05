#!/bin/bash
gulp --version
if [ "$?" -ne "0" ]
then 
  npm install gulp-cli -g
fi
babel --version
if [ "$?" -ne "0" ]
then 
  npm install babel-cli -g
fi
tsc --version
if [ "$?" -ne "0" ]
then 
  npm install typescript -g
fi
if [ ! -d "node_modules" ]
then
  npm install
fi
gulp

