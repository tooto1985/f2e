#!/bin/bash
npm list gulp -g
if [ "$?" -ne "0" ]
then 
  npm install gulp -g
fi
npm list babel-cli -g
if [ "$?" -ne "0" ]
then 
  npm install babel-cli -g
fi
npm list typescript -g
if [ "$?" -ne "0" ]
then 
  npm install typescript -g
fi
if [ ! -d "node_modules" ]
then
  npm install
fi
gulp

