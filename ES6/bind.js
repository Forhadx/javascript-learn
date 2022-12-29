/*
    bind is like call but bind can usable and call anywhere
*/

// EX: 1
let person = {
  name: "forhad",
  age: 25,
};

function show(city, country) {
  console.log(`${this.name} age ${this.age}. live in ${city}-${country}`);
}

let x = show.bind(person, "Dhaka", "Bangladesh");
x(); // forhad age 25. live in Dhaka-Bangladesh
// console.log(x); // return function

// EX: 2

let sum = (a, b, c) => {
  console.log("a: ", a); // 3
  console.log("b: ", b); // 5
  console.log("c: ", c); // 10
  return a + b + c;
};

let add = sum.bind(null, 3, 5);
console.log(add(10)); // 18
// console.log(add(10, 20, 30)); // 18, a = 3, b=5, c=10 | 20,30 not used
