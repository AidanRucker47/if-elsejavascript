// create six if else statements that check if the value is truthy or falsy
// structure six if else statements and fill in each value, console log
// run node index.js in your terminal to see outcomes
// if the output is wrong then look at all of your if else statements for any sort of error including typos, syntax errors, etc...

// if ("iamastring") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (false) {
//   console.log("true");
// } else {
//   console.log("the bullion value false is falsy");
// }

// if (null) {
//   console.log("true");
// } else {
//   console.log("null value false is falsy");
// }

// if (undefined) {
//   console.log("true");
// } else {
//   console.log("undefined is falsy");
// }

// if (0) {
//   console.log("true");
// } else {
//   console.log("the number 0 is falsy");
// }

// if ("") {
//   console.log("true");
// } else {
//   console.log("the empty string is falsy");
// }

// using if/else statements, code a script that takes the sum of two numbers and prints the correct result
// if the output is wrong according to what the result should be deubug your code for errors.
// create a variable for num1
// create a variable for num2
// create a variable for sum = num1 + num2

// let num1 = 50
// let num2 = 51
// let sum = num1 + num2

// if(num1 + num2 >= 100){
//    console.log(sum + "is greater than 100")
// } else {   console.log(sum + "in not greater than 100")
//  }

// num1 = 99;
// num2 = -2;
// sum = num1 + num2;

// if (num1 + num2 > 0) {
//   console.log(sum + " is greater than 0");
// } else {
//   console.log(sum + " in not greater than 100");
// }

// let num1 = 0;
// let num2 = 101;
// let sum = num1 + num2;

// if (num1 + num2 > 0) {
//   console.log("101 is greater than 100");
// } else {
//   console.log("is not greater than 100");
// }

// let num1 = 500;
// let num2 = -500;
// let sum = num1 + num2;

// if (num1 + num2 >= 0) {
//   console.log("0 is equal to 0");
// } else {
//   console.log("0 is not equal to 0");
// }

// let num1 = -1000;
// let num2 = 0;
// let sum = num1 + num2;

// if (num1 + num2 < 0) {
//   console.log("-1000 is a negative number");
// } else {
//   console.log("-1000 is not a negative number");
// }

// let num1 = -5;
// let num2 = 0;
// let sum = num1 + num2;

// if (num1 + num2 < 0) {
//   console.log("-5 is a negative number");
// } else {
//   console.log("-5 is not  negative");
// }

// using if/else statements, code a script that gives the console.log true if both parameters are greater or equal to 5
// in the if statement write (sum1 && num2 >= 5) the {console.log true}
// in the else write {console.log false}

// let num1 = 5;
// let num2 = 6;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num1 = 10;
// let num2 = 11;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num1 = 0;
// let num2 = 0;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num1 = 1000;
// let num2 = -1000;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num1 = 6;
// let num2 = 4;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let num1 = 5;
// let num2 = 5;

// if (num1 && num2 >= 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Using if/else and equality operators,
// code a script that compares two sets of two values.
// console.log true if at least one of the pairs is truthy.
// if param1a = param1b || param2a = param2b console.log true
// if there are two seperate conditions in one if statement write them in seperate parenthesis
// for example if((p1a = p1b)|| (p2a = p2b))

// let param1a = "cat";
// let param1b = "cat";
// let param2a = 6;
// let param2b = "6";

// if ((param1a = param1b) || (param2a = param2b)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

let param1a = "five";
let param1b = 5;
let param2a = "dog";
let param2b = "dawg";

if ((param1a = param1b)) {
  console.log(true);
} else {
  console.log(false);
}
