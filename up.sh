
MESSAGE=""
if [ -z "$1" ]
  then
    MESSAGE="auto commit"
  else
    MESSAGE="$1"
fi

./toc.sh> ./README.md
git add .
git commit -m "$MESSAGE"
git push
git push