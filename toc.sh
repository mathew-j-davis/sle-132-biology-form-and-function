#!/bin/bash

# loop & print a folder recusively,
# print_folder_recurse() {
#     for i in "$1"/*;do
#         if [ -d "$i" ];then
#             echo "dir: $i"
#             print_folder_recurse "$i"
#         elif [ -f "$i" ]; then
#             echo "file: $i"
#         fi
#     done
# }


# # try get path from param
# path=""
# if [ -d "$1" ]; then
#     path=$1;
# else
#     path="/tmp"
# fi

# echo "base path: $path"
# print_folder_recurse $path
function namelinkmd {
  
  # take link
  input=$1

  #strip extension
  name=""
  if [[ $input =~ ^(.*)\.md$ ]]; then
    name="${BASH_REMATCH[1]}"
  fi

  seek="-"
  space=" "  
  empty=""

  #replace hyphens
  name="${name//$seek/$space}"

  s=$name$space  

  name=""
  while [[ $s ]];  
  do  

    i="${s%%"$space"*}" 
    foo="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    name+=$foo$space

    s=${s#*"$space"}; 

  done;  
  
  if [[ $name =~ (.*)[[:space:]]$ ]]; then
    name="${BASH_REMATCH[1]}"

  fi



  echo '['$name"]("$input")"

return 
}

function e {

  output=""
  separator=$'\n\n\n'
  for d in "$1"*
  do

    if [[ $d =~ ^.*\.md$ ]]; then
      link=$(namelinkmd $d)
      output=$output$separator$link
    fi

    # if [ -d "$d" ]; then
    #  #e $d/
     
    # fi
  done

  echo "$output"
} 


e 

