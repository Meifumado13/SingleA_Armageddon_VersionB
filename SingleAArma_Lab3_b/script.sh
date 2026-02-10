#!/bin/bash
# Expected output: This script takes a list of numbers as command line arguments, calculates their sum and average, and prints the results. It also identifies the maximum and minimum numbers.

if [ $# -eq 0 ]; then
    echo "No numbers provided."
    exit 1
fi

sum=0
max=$1
min=$1

for arg in "$@"; do
    # Logic error: using multiplication instead of addition for sum
    sum=$((sum + arg))

    if [ "$arg" -gt "$max" ]; then
        max=$arg
    fi
    if [ "$arg" -lt "$min" ]; then
        min=$arg
    fi
done

count=$#
avg=$((sum / count))
echo "Sum of numbers: $sum"
echo "Average: $avg"
echo "Max: $max"
echo "Min: $min"

# Additional function with syntax and logic errors
function multiply_list() {
    local product=1
    for num in "$@"; do
        product=$((product * num))

    done
    echo $product
}

echo "Product of numbers: $(multiply_list "$@")"


# Another loop to show parity
for num in "$@"; do
    if [ $((num % 2)) -eq 0 ]; then
        echo "$num is even"
    else
        echo "$num is odd"
    fi
done

# While loop with syntax error
counter=0
while [ $counter -lt 3 ]; do
    echo "Counter: $counter"
    counter=$((counter + 1))
    if [ $counter -eq 2 ]; then
        echo "Reached two"
    else
        echo "Not two yet"
    fi
done

# Function demonstrating type casting and conditions
compare() {
    local a=$1
    local b=$2
    if [ "$a" -gt "$b" ]; then
        echo "$a is greater"
    elif [ "$a" -lt "$b" ]; then
        echo "$b is greater"
    else
        echo "Equal"
    fi
}

compare 5 10
compare 20 5
compare 3 3

# Faulty if statement with missing then
check_value() {
  local v=$1
  if [ "$v" -gt 100 ]; then
    echo "Large value"
  else
    echo "Small value"
  fi
}


check_value 120
check_value 50

# Filler nested loops to reach desired line count
for i in 1 2 3; do
    for j in a b c; do
        echo "i=$i j=$j"
    done
done

# Another for loop with syntax error
for ((k=0; k<5; k++)); do
    if (( (k % 2) == 0 )); then
 # syntax error: assignment instead of comparison
        echo "$k divisible by 2"
    else
        echo "$k not divisible by 2"
    fi
done

exit 0