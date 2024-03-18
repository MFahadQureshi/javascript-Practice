// Q=1
var num = prompt("Give number and check if is even or Odd");

if(num % 2 == 0){
    document.write(`<h1>${num}</h1> is Even`)
}
else{
    document.write(`<h1>${num}</h1> is Odd`)
};
// Q=2
var num1 = prompt("Give number and check if is Positive or Negative");

if(num1 > 0){
    document.write(`<h1>${num1}</h1> is Positive`)
}
else if(num1 == 0){ 
    document.write(`<h1>${num1}</h1> is Zero`)
}
else{
    document.write(`<h1>${num1}</h1> is Negative`)
};
// Q=3
var a = prompt("Input the First integer", "0");
var b = prompt("Input the Second integer", "0");

if (a > 0 && b > 0 && a > b) {
    document.write(`<h1>${a}</h1> is Large number`);
  } else if (a > 0 && b > 0 && a < b) {
    document.write(`<h1>${b}</h1> is Large number`);
  } else if (a === b && a > 0 && b > 0) {
    document.write(`<h1>${a}</h1> <h1>${b}</h1> Both numbers are equal!`)
  } else {
      document.write(`<h1>${a}</h1><h1>${b}</h1>Please add an integer!`)};
// Q=4

var num1 = prompt("enter 1st number");
var num2 = prompt("enter 2nd number");
var num3 = prompt("enter 3rd number");

var smallestNumber = num1;
if (num2 < smallestNumber) {
  smallestNumber = num2;
} else if (num3 < smallestNumber) {
  smallestNumber = num3;
} else {
  smallestNumber = "null";
}

document.write("the smallest number is", smallestNumber);
// Q=5
var num = prompt("enter any number for factorial");

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else if (num < 0) {
    return "Factorial is not defined for negative numbers";
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
var answer = factorial(num);
document.write(`The factorial of ${num} is ${answer}`);
// Q=6
// Q=7
// Q=8
// Q=9
var mark1 = prompt("Enter marks for subject 1 (out of 100):");
var mark2 = prompt("Enter marks for subject 2 (out of 100):");
var mark3 = prompt("Enter marks for subject 3 (out of 100):");

if (isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
  alert("Please enter valid numbers for marks.");
}
// Q=10

var average = (mark1 + mark2 + mark3) / 3;

var grade;
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}

document.write(`Your average score is: ${average.toFixed(2)}`);
document.write(`Your grade is: ${grade}`);
// Q=11
var celsius = prompt("Enter temperature in Celsius:");

var fahrenheit = (celsius * 9) / 5 + 32;

document.write(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
// Q=12
var side1 = prompt("Enter the length of side 1:");
var side2 = prompt("Enter the length of side 2:");
var side3 = prompt("Enter the length of side 3:");

if (
  isNaN(side1) ||
  isNaN(side2) ||
  isNaN(side3) ||
  side1 <= 0 ||
  side2 <= 0 ||
  side3 <= 0
) {
  alert("Please enter valid positive numbers for side lengths.");
}

if (
  side1 + side2 <= side3 ||
  side2 + side3 <= side1 ||
  side1 + side3 <= side2
) {
  document.write(
    "Invalid triangle: The sum of any two sides must be greater than the third side."
  );
}

if (side1 === side2 && side2 === side3) {
  document.write("Equilateral Triangle: All three sides are equal.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  document.write("Isosceles Triangle: Two sides are equal.");
} else {
  document.write("Scalene Triangle: All three sides are unequal.");
}
// Q=13
var character = prompt("Enter a character:").toLowerCase();

if (character.length !== 1 || !isNaN(character)) {
  alert("Please enter a single alphabetical character.");
}

if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u" ||
  character === "y"
) {
  document.write("Vowel");
} else {
  document.write("Consonant");
}
// Q=14
var base = prompt("Enter the base number:");
var exponent = prompt("Enter the exponent (whole number):");

var result = 1;
for (var i = 0; i < exponent; i++) {
  result *= base;
}

document.write(`${base} raised to the power of ${exponent} is ${result}`);
// Q=15
var age = prompt('User Age')

if (age <= 20) {
  document.write(`<h2>You are Adult.</h2>`)
}
else if(age >= 65){
    document.write(`<h2>You are Senior.</h2>`)
}
else {
  document.write(`<h2>You are Teenager. </h2>`)
}