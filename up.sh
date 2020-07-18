
MESSAGE=""
if [ -z "$1" ]
  then
    MESSAGE="auto commit"
  else
    MESSAGE="$1"
fi

node ./toc.js
git add .
git commit -m '$MESSAGE'
git push