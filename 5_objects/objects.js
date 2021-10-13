/*  Objects
        - object key names
        - object key names
        - Copy object 
              - (...) spread
              - object.assign()
        - in operator
        - object destructing
*/

//##  object key names
let person = {
  name: "forhad",
  age: 24,
  show: () => {
    console.log("hi brothers!!");
  },
};

console.log(person); //  {name: "forhad", age: 24, show: ƒ}

// add
person.hobby = "football";
console.log(person); //  {name: "forhad", age: 24, hobby: "football", show: ƒ}

// modify
person.name = "XXX";
console.log(person); // {name: "XXX", age: 24, hobby: "football", show: ƒ}

// delete
delete person.name;
console.log(person); //  {age: 24, hobby: "football", show: ƒ}

//---------------------------------------------------------------------

//## object key names

let p1 = {
  "first name": "forhad",
  arr: [1, 2, 3, 4],
  2.5: "two point five",
};

console.log(p1); // {first name: "forhad", arr: Array(4), 2.5: "two point five"}

console.log(p1["first name"]); // forhad
console.log(p1.arr); // [1, 2, 3, 4]
console.log(p1["2.5"]); // two point five

//--------------------------------------------------------------------------
//## Copy object

// copy by refenece
let a = {
  name: "forhad",
  age: 24,
};

let b = a;
b.name = "xxx";
console.log(a); //{name: "xxx", age: "24"}
console.log(b); //{name: "xxx", age: "24"}

// copy independently by spread operator
let c = {
  name: "forhad",
  age: 24,
};

let d = { ...c };
d.age = 100;
console.log(c); // {name: "forhad", age: 24}
console.log(d); //{name: "forhad", age: 100}

// copy by Object.assign()

let e = Object.assign({}, c);
e.name = "xxx";
console.log(c); // {name: "forhad", age: 24}
console.log(e); //{name: "xxx", age: "24"}

//----------------------------------------------------------------------
//## in operator

let m = {
  name: "forhad",
  age: 24,
};

console.log("name" in m); // true
console.log("age" in m); // true
console.log("abc" in m); // false

//## object destructing
let n = {
  name: "forhad",
  age: 24,
  prof: "soft",
  hobby: "football",
};

let { name, age, ...others } = n; // var name same as obj key name
console.log(name); // forhad
console.log(age); //24
console.log(others); // {prof: "soft", hobby: "football"}
