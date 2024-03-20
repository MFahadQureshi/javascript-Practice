//1.variable banate hen
//2.condition
//3.increment ya decrement

// Q=1
// Write a loop to print numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// Q=2
// Write a loop to print even numbers from 1 to 20.
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Q=3
// Write a loop to print odd numbers from 1 to 15.
for (var i = 1; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Q=4
// Write a loop to calculate and print the factorial of a number (let's say 5).
for (var i = 1; i <= 5; i++) {
  console.log(i * i);
}

// Q=5
// Write a loop to print the Fibonacci series up to the 10th term.
var a = 0;
var b = 1;
// for(i = 0; 1 <= 10; i++){
//     var tamp = a + b;
//     console.log(tamp)
//     a = b;
//     b = tamp;
// }

// Q=6
// Write a loop to find and print the sum of digits of a number (let's say 123).

// Q=7
// Write a loop to print the multiplication table of a number (let's say 7) up to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i * 7);
}

// Q=8
// Write a loop to print the reverse of a string (let's say "hello").
for (var i = 1; i <= 10; i++) {
    console.log("Hello ");
  }

// Q=9
// Write a loop to print the square of numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i * i);
}

// Q=10
// Write a loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).
var ary = [3, 7, 2, 9, 5];
var lop = 0;

for (i = 0; i <= lop; i++){
    if(ary>=lop){
        var lop=ary[i];
    }
    console.log(lop)
}