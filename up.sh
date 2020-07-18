
MESSAGE=""
if [ -z "$1" ]
  then
    MESSAGE="auto commit"
  else
    MESSAGE="$1"
fi

node ./toc.js > ./README.md
git add .
git commit -m "$MESSAGE"
git push
git push