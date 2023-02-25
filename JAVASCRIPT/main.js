// 1- let - const - var :

var a = 3;
let b = 4;
const c = "hello";
b = "hi";

// 2- Primtive types  :

const d = 1; // integer
const e = 1.4; // float
const f = "hello"; //String
const g = false; // boolean

// 3- undefined vs null  :

let h;
console.log(h);

let i = null;
console.log(i);

// 3- Arithmetic operator :

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(2 ** 2);

// 4- Assignement operator :

let j = "sidali";
let k = 2;
j = k;
console.log(k);

// 5- Comparison operators :

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(2 != 1);
console.log(2 !== 2);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(1 < 2);

// falsy values : they all return false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(false));

console.log(undefined == NaN);

// 6- logical operator :
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

const l = 4;
const m = 0;
console.log(l && m); // 0
console.log(l || m); // 4

// 7- Strings : concatenation - Template literals
const x = "hello";
const z = "sidali";
console.log(x + " my name is " + z); // hello my name is sidali

const y = x + z;
console.log(y); // hellosidali

console.log(`hello sidali ${y}`); // hello sidali hellosidali

// 8- Arrays : Declaring - Accessing - push - pop - shift - unshift -  length

const array = [1, 2, 3, 4];
const array2 = new Array(2, 4, 5, 5);
console.log(array); //[1,2,3,4]

console.log(array.length); // 4

console.log(array[0]); // 1
console.log(array[1]); // 2

array.push(5);
console.log(array); // [1,2,3,4,5]

array.pop();
console.log(array); //[1,2,3,4]

console.log(array2.pop()); //5
console.log(array2); // [2,4,5]

array.shift();
console.log(array); // [2,3,4]

array.unshift(1);
console.log(array); // [1,2,3,4]

// 9- Objects : Declaring - properties - methods - accessing - adding - deleting

const car = {
  name: "golf",
  color: "white",
  power: 30,
  description: function () {
    return `this car is ${this.name} and it color is ${this.color}`;
  },
};

console.log(car.name); // golf
console.log(car.color); //white
console.log(car.description()); // this car is golf and it color is white

console.log(car["name"]); // golf

car.weight = 4000;

console.log(car); // {name: 'golf', color: 'white', power: 30, weight: 4000, description: ƒ}

car.name = "maruti";

console.log(car.description()); // this car is martuti and it color is white

console.log(car); // {name: 'maruti', color: 'white', power: 30, weight: 4000, description: ƒ}

delete car.power;

console.log(car); // {name: 'maruti', color: 'white', weight: 4000, description: ƒ}

// 10- functions : noraml function - arrow function - callback function

function addition(a, b) {
  console.log("heello");
  return a + b;
}

const t = addition(1, 2);
console.log(t);

const soustraction = (a, b) => {
  return a - b;
};
const w = soustraction(4, 2);
console.log(w);

const r = (x) => {
  console.log("hheeellloo");
  x();
};

r(() => {
  console.log("callback functions");
});

const u = () => {
  console.log("function u");
};

r(u); // do not do r(u())

// comment in one ligne
/* 
    comment 
    in multiple lignes 
 */

// 11- reference vs value

const o = 2;
const p = o;
console.log(p);

const array3 = [1, 2, 3, 4];
const array4 = [1, 2, 3, 4];

console.log(array3 == array4);

const array5 = array3;
console.log(array5 == array3);
array3.pop();
console.log(array3);
console.log(array5);

// 12- if-else

let v = 6;

if (v >= 5) {
  console.log("v bigger then 5");
} else if (v <= 3) {
  console.log("v smaller then 3");
} else {
  console.log("v between 3 and 5");
}

// 13- Switch case

switch (v) {
  case 10:
    console.log("v equal to 10");
    break;

  case 5:
    console.log("v equal to 5");
    break;
  default:
    console.log("v isn't 5 nor 10");
    break;
}

// 14- ternary operator :

v == 10 ? console.log("v equal to 10") : console.log("v is not equal to 10");

//syntaxe :

// condition ? instruction if the condition is true : instruction if the condition is false

// 15- Loops

const arr1 = [
  { name: "sidali", age: 21 },
  { name: "mohamed", age: 21 },
  { name: "yasser", age: 21 },
];

for (let index = 0; index < arr1.length; index++) {
  console.log(arr1[index].name);
}

const person = {
  name: "karim",
  age: 20,
};

for (const properties in person) {
  console.log(person[properties]);
}

while (v < 10 && v > 0) {
  console.log(v);
  v--;
}

let booll = true;

do {
  console.log(v);
  booll = false;
} while (booll == true);

// 16- Arrays methods :

const items = [
  { name: "TV", price: 200 },
  { name: "PS4", price: 100 },
  { name: "Phone", price: 1000 },
  { name: "Table", price: 50 },
  { name: "Bycicle", price: 10 },
  "heello",
];

console.log(items);
// map : return a new array

const itemsName = items.map((item) => {
  return item.name;
});

console.log(itemsName);

// forEach :

const displayItems = items.forEach(function (item) {
  console.log(item);
});

// filter :

const expensivePrice = items.filter((item) => {
  return item.price > 50;
});

console.log(expensivePrice);

// reduce :

const totalPrice = items.reduce((total, item) => {
  return item.price + total;
}, 0);
console.log(totalPrice);

// slice :

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// splice :

const months = ["Jan", "March", "April", "June"];

const newMonths = months.splice(3, 1, "September", "Decamber");

console.log(months);

// sort :

let numbers = [0, 1, 2, 50, 10, 20, 30];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers);

// concat :

const newItems = items.concat([{ name: "tableau", price: 30 }]);

console.log(newItems);

// indexOf :

const index = items.indexOf("heello");
console.log(index);

//lastIndexOf :

// find :

const phoneItem = items.find((item) => {
  return item.name === "Phone";
});

console.log(phoneItem);

// some :

const someItems = items.some((item) => {
  return item.price >= 100;
});

console.log(someItems);

// every :

const everyItems = items.every((item) => {
  return item.price >= 100;
});

console.log(everyItems);

//Array.isArray(array)

Array.isArray(items); // true

// 16- Destructuring and Spreading operator

// with arrays :

const alphabet = ["A", "B", "C", "D"];
const numeros = [1, 2, 3, 4, 5, 6];

// with objects

// with function

// 17- Optionnal chaining

// 18- Document Object Model : DOM

// the query selectors

// other ways to query the dom

// changing the page content

// getting and setting attributes

// changing css styles

// adding and removing classes

// events basics

// creating and removing elements

// 19- Asynchronous JavaScript

// 20- Errors

// 21-
