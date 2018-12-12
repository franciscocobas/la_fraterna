#!/bin/bash

function checkError {

  if [ $? -ne 0 ]
  then
    echo "
    -- DEPLOYMENT FAIL =( --
    "
    exit 1
  fi

}

gulp deploy_prod

checkError

deploy_folder="./website/*"

rsync -r $deploy_folder ec2-user@ec2-18-221-70-156.us-east-2.compute.amazonaws.com:/var/www/webdevcoop.com/public_html/

checkError

gulp back_to_dev

checkError

echo "
-- DEPLOYMENT SUCCESS --
"
exit 0
