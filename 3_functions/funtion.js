/* function
        - declaration fn/ fn statement
        - anonymous fn
        - Arrow fn
        - Rest operator
        - callback() fn  // A callback function is a function passed into another function as an argument
*/

//  declaration fn
function add(a, b) {
  return a + b;
}
console.log(add(1, 4)); // 5

// anonymous fn
const minus = function (a, b) {
  return a - b;
};
console.log(minus(1, 4)); // -3

//Arrow fn
const mul = (a, b) => {
  return a * b;
};
console.log(mul(2, 6)); // 12

/* Arrow fn
    1. ()=>{...}
    2. a =>{....}
    3. (a,b)=>{...}
*/
console.log("--------------------------------------------------------------");

// Rest operator
const x = (...num) => {
  console.log(num); // [1, 2, 3, 4, 5]
};
x(1, 2, 3, 4, 5);

/*
const y = (a, b, ...num, c)=>{  // c is not accepted
}
y(1,2,3,4,5,6,7)
*/

const y = (a, b, ...num) => {
  console.log(a); // 1
  console.log(b); // 2
  console.log(num); // [3, 4, 5, 6, 7]
};
y(1, 2, 3, 4, 5, 6, 7);
console.log("--------------------------------------------------------------");

// callback() fn

const sum = (res, num) => {
  num = num + 20;
  res(num);
};

const result = (r) => {
  console.log("result: ", r); // result: 30
};

sum(result, 10);
