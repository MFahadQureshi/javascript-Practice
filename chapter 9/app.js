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

// Q=5
// Q=6
// Q=7
// Q=8
// Q=9
// Q=10
// Q=11
// Q=12
// Q=13
// Q=14
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