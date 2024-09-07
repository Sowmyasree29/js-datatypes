// Primitive Data Types
// Number

// Represents both integer and floating-point numbers.
Example:


let age = 25;         // Integer
let pi = 3.1415;      // Floating point
let negative = -10;   // Negative number
let bigNumber = 1e6;  // Scientific notation
console.log(typeof age);   // "number"


String

// Used to represent text, enclosed in single ('), double ("), or template literals (`).

let firstName = 'John';        // Single quotes
let lastName = "Doe";          // Double quotes
let greeting = `Hello ${firstName}`;  // Template literal (ES6)
console.log(typeof firstName);  // "string"


Boolean

// Represents logical values, either true or false.

let isOnline = true;
let hasPermission = false;
console.log(typeof isOnline);  // "boolean"
Undefined

// A variable that has been declared but not assigned a value is of type undefined.
Example:

let notAssigned;
console.log(notAssigned);      // undefined
console.log(typeof notAssigned); // "undefined"


Null

// Represents an intentional absence of any object value.

let noValue = null;
console.log(noValue);          // null
console.log(typeof noValue);   // "object" (historical bug in JS)




// non primitive data types

Object

// Used to store collections of key-value pairs or more complex entities. Objects can hold properties (key-value pairs) and methods (functions).

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.firstName}`;
  }
};
console.log(person.firstName);    // "John"
console.log(person.greet());      // "Hello, my name is John"
console.log(typeof person);       // "object"


Array

// Special type of object used to store ordered collections of values. Arrays can hold mixed data types.

let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, 'apple', true, null];
console.log(numbers[0]);         // 1
console.log(typeof numbers);     // "object"


Function

// Functions are also objects in JavaScript and can be treated as data types. Functions allow reusable blocks of code.

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));          // 5
console.log(typeof sum);         // "function"