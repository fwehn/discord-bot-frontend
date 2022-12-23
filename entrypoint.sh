#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

echo "Replacing env constants in JS"
for file in $ROOT_DIR/assets/index.*.js*;
do
  echo "Processing $file ...";

  sed -i 's|API_AUTH_TOKEN|'${API_AUTH_TOKEN}'|g' $file
  sed -i 's~http://localhost:3000/~'${API_PATH}'~g' $file

done

nginx -g "daemon off;"