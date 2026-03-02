// Data Types & Variables
let name = "Nagwa";
const age = 21;
var city = "Zagazig";

let str = "Hi";
let num = 33;
let isStudent = true;
let x = null;
let y;

// Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Numbers
let num2 = 10.456;
console.log(num2.toFixed(2));
console.log(Math.round(4.6));
console.log(Math.random());

// Strings & Methods
let text = "Hello World";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Hello"));
console.log(text.slice(0, 5));

// Comparison & Logical Operators
let x1 = 10;
console.log(x1 == "10");
console.log(x1 === "10");
console.log(x1 > 5);
console.log(x1 < 5);
console.log(x1 > 5 && x1 < 20);
console.log(x1 > 5 || x1 < 5);
console.log(!(x1 > 5));

// If Condition
let age2 = 18;
if (age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

// Switch Statement
let day = 2;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

// Loop - For
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop - While
let i2 = 1;
while (i2 <= 5) {
    console.log(i2);
    i2++;
}

// Function & Parameters
function greet(name) {
    console.log("Hi " + name);
}
greet("Nagwa");

// Function & Scope
let globalVar = "I am global";
function test() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
test();