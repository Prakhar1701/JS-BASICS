console.log("Hello World");

let name = "Prakhar"; // Variable // String Literal

console.log(name);

const interestRate = 0.3; // Constant

// interestRate = 1;

console.log(interestRate);

let age = 30; // Number Literal

let isApproved = false; // Boolean Literal

let firstName = undefined;

let selectedName = null;

console.log(typeof age);

console.log(typeof selectedName);

// Objects

let person = {
  name: "Prakhar",
  age: 20,
};

console.log(person);

// Dot Notation:

person.age = 23;

console.log(person.age);

// Bracket Notation:

person["age"] = 21;

console.log(person.age);

// Arrays

let selectedColors = ["red", "green", "blue"];

console.log(selectedColors);

console.log(selectedColors[1]);

selectedColors[3] = 19; // Dynamic

console.log(selectedColors);

console.log(typeof selectedColors);

console.log(selectedColors.length);

//Functions

// Performing a task:

function greet1() {
  console.log("Hello World");
}

greet1();

function greet2(name) {
  console.log("Hello " + name);
}

greet2("Prakhar");

function greet3(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet3("Prakhar", "Agrawal");

// Calculating a value:

function square(number) {
  return number * number;
}

console.log(square(5));
