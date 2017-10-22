// 1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object

var numbers = [2, 5, 9, 23, 35, 56];

var obj = {};

for(var i = 0; i < numbers.length; i++) {
     var key = numbers[i].toString();
     var value = double(numbers[i]);
     obj[key] = value;
}

function double(number) {
  return number * 2;
}

obj;
