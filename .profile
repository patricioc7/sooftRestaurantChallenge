#!/usr/bin/env sh

env | grep "GDF_" | while IFS= read -r line
do
  name="${line%%=*}"
  echo "$(eval echo "\$$name")" > /app/"$name".json
done