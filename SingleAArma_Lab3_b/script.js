// Expected output: This script sorts an array of numbers in ascending order, prints the sorted array, and also prints the array in descending order. It then calculates the median and mean of the numbers.

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function computeMedian(arr) {
  var mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
  return arr[mid];
}

function computeMean(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function main() {
  var numbers = [5, 3, 8, 1, 9, 2];
  console.log("Original array:", numbers);
  var sorted = bubbleSort(numbers.slice());
  console.log("Sorted array:", sorted);
  console.log("Descending:", sorted.reverse());
  var median = computeMedian(sorted);
  var mean = computeMean(sorted);
  console.log("Median:", median);
  console.log("Mean:", mean);

  // Intentional logic error: multiply numbers to sort
  function multiplySort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] * arr[j + 1]) {
          // logic error: should compare values
          var t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        }
      }
    }
    return arr;
  }
  var wrongSort = multiplySort(numbers.slice());
  console.log("Wrongly sorted array:", wrongSort);

  // Additional filler code with syntax errors
  function sumDigits(n) {
    var s = n.toString();
    var total = 0;
    for (var k = 0; k < s.length; k++) {
      total += parseInt(s[k]);
    }
    return total;
  }
  console.log("Sum of digits of 123:", sumDigits(123));

  // Loop: print even/odd
  for (var a = 0; a <= 5; a++) {
    if (a % 2 === 0) {
      console.log(a + " is even");
    } else {
      console.log(a + " is odd");
    }
  }

  // Nested loops to fill lines
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      var value = matrix[row][col];
      console.log("Matrix value", value);
    }
  }

  // While loop
  var count = 3;
  while (count > 0) {
    console.log("Count is", count);
    count--;
  }

  // Function with missing brace and syntax error
  function faulty(a, b) {
    var c = a + b;

    if (c > 10) {
      return c;
    } else if (c < 0) {
      return -c;
    }

    return c;
  }

  console.log(faulty(3, 4));
}

main();

// Additional filler code to increase the number of lines and showcase more logic
function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial of 5:", factorial(5));

// Demonstrate casting and comparison
function compareValues(a, b) {
  var x = Number(a);
  var y = parseFloat(b);
  if (x === y) {
    console.log("Values are strictly equal");
  } else if (x > y) {
    console.log("First is greater");
  } else {
    console.log("Second is greater");
  }
}
compareValues("10", "10.0");
compareValues("7", "5.5");

// Another for loop with a logic error
for (var i = 10; i > 0; i--) {
  console.log("i is", i);
}

// A dummy function with a syntax error
function dummy(x) {
  if (x) {
    return x;
  } else {
    return null;
  }
}

console.log(dummy(1));
