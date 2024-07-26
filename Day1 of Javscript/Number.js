// Sample number for demonstration
let number = 123.456;

// 1. toFixed: Format a number using fixed-point notation
let fixedNumber = number.toFixed(2); // Output: "123.46"

// 2. toPrecision: Format a number to a specified length
let preciseNumber = number.toPrecision(5); // Output: "123.46"

// 3. toString: Convert a number to a string
let numberString = number.toString(); // Output: "123.456"

// 4. parseInt: Parse a string and return an integer
let integer = parseInt("123.456"); // Output: 123

// 5. parseFloat: Parse a string and return a floating point number
let floatNumber = parseFloat("123.456"); // Output: 123.456

// 6. isNaN: Check if a value is NaN (Not-a-Number)
let notANumber = isNaN("hello"); // Output: true

// 7. isFinite: Check if a value is a finite number
let finiteNumber = isFinite(123); // Output: true

// 8. Math.abs: Get the absolute value of a number
let absoluteValue = Math.abs(-123); // Output: 123

// 9. Math.ceil: Round a number up to the nearest integer
let roundedUp = Math.ceil(123.456); // Output: 124

// 10. Math.floor: Round a number down to the nearest integer
let roundedDown = Math.floor(123.456); // Output: 123

// 11. Math.round: Round a number to the nearest integer
let rounded = Math.round(123.456); // Output: 123

// 12. Math.max: Get the maximum value from a list of numbers
let maxNumber = Math.max(1, 2, 3, 4, 5); // Output: 5

// 13. Math.min: Get the minimum value from a list of numbers
let minNumber = Math.min(1, 2, 3, 4, 5); // Output: 1

// 14. Math.pow: Calculate a number raised to the power of another number
let power = Math.pow(2, 3); // Output: 8

// 15. Math.sqrt: Calculate the square root of a number
let squareRoot = Math.sqrt(16);

console.table([
  fixedNumber,
  preciseNumber,
  numberString,
  integer,
  floatNumber,
  notANumber,
  finiteNumber,
  absoluteValue,
  roundedUp,
  roundedDown,
  rounded,
  maxNumber,
  minNumber,
  power,
  squareRoot,
]);
