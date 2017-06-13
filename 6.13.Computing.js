// While
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

// For
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result);

var result = 1;
for (var counter = 0; counter < 10; counter += 1)
  result = result * 2;
console.log(result);

var result = 1;
for (var counter = 0; counter < 10; counter++)
  result = result * 2;
console.log(result);

// Exercise 1
for (var counter = "#"; counter.length < 8; counter += "#")
  console.log(counter);

// Exercise 2
for (var counter = 1; counter <= 100; counter++)
  if (counter % 15 == 0) console.log("FizzBuzz");
  else if (counter % 5 == 0) console.log("Buzz");
  else if (counter % 3 == 0) console.log("Fizz");
  else console.log(counter);

// Better answer
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

// Exercise 3
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);