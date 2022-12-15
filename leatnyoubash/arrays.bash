
temp=${@:2:2} 
array=(I am $temp and $4 )
echo "${array[*]}"