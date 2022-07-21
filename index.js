// Create one function with zero parameter having a console statement;

function firstFunction() {
  console.log("Jeevesh");
}
firstFunction();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function secondFunction(a, b) {
  let c = a + b;
  console.log(`Sum of ${a}, ${b} is ${c} `);
}
secondFunction(3, 4);

// Create one arrow function

const arrow = () => {
  console.log("Fat Arrow function");
};
arrow();

// "Print output:

// var x = 21;
// var girl = function () {
//   console.log(x); // Undefined
//   var x = 20;
// };
// // girl();

// // "Print output:
// var x = 21;
// girl();
// console.log(x); // Undefined
// function girl() {
//   console.log(x); //21
//   var x = 20;
// }

// "Print output

// var x = 21;
// a(); // a is not defined
// b();
// console.log(a);
// a = function () {
//   x = 20;
//   console.log(x);
// };
// b = function () {
//   x = 40;
//   console.log(x);
// };

// Write a function that accepts parameter n and returns factorial of n
function factorial(n) {
  let bag = 1;
  for (let i = 1; i <= n; i++) {
    bag = bag * i;
  }
  console.log(bag);
}
factorial(5);
