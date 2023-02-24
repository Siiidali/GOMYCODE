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

// 12- if-else

// 13- Switch case

// 14- ternary operator :

// 15- Loops

// 16- Arrays methods : forEach - map - filter - reduce -

// 16- Destructuring

// 17- Spreading operator

// 18- Optionnal chaining

// 19- Js modules

// 20- Asynchronous JavaScript

// 21- Handling errors

// 22-
