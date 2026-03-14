let message = "Hello JavaScript!";

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.length);

let text = "JavaScript is amazing Programming Language";

console.log(text.startsWith("Java"));
console.log(text.startsWith("Script"));

let word = "JS ";
console.log(word.repeat(3));


let fruits = ["Mango", "Orange", "Banana", "Apple"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Grapes");
fruits.pop();

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


let now = new Date();

let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log("Current Date: " + day + "/" + month + "/" + year);
console.log("Current Time: " + hours + ":" + minutes + ":" + seconds);