/*
    -> forEach()
    -> map()
    -> reverse()
    -> sort()
    -> array destructing
    -> reduce() - sum directly
*/

//## forEach()

let a = [2, 4, 5, 6, 7];

a.forEach((val) => {
  console.log(val); // 2 4 5 6 7
});

a.forEach((val, index) => {
  console.log(index); // 0 1 2 3 4
  console.log(val); // 2 4 5 6 7
});

//## map()
let b = [5, 4, 3, 2, 1];

let b1 = b.map((x) => {
  return x;
});
console.log(b1); // [5, 4, 3, 2, 1]

let b2 = b.map((val, index) => {
  console.log(index); // 0 1 2 3 4
  return val;
});
console.log(b2); // [5, 4, 3, 2, 1]

//## sort(), reverse()
let c = [8, 1, 5, 4, 2, 3];

// reverse
console.log(c.reverse()); // [3, 2, 4, 5, 1, 8]

//sort()
console.log(c.sort()); //  [1, 2, 3, 4, 5, 8]

let c1 = c.sort();
console.log(c1); //  [1, 2, 3, 4, 5, 8]

c1.push(99);
console.log(c); // [1, 2, 3, 4, 5, 8, 99]

// another process
let x = [8, 1, 5, 4, 2, 3];
let c2 = c.sort((a, b) => {
  if (a > b) return 1;
  else if (a === b) return 0;
  else return -1;
});
console.log(c2); // [1, 2, 3, 4, 5, 8]

c2.push(100);
console.log(c); // [1, 2, 3, 4, 5, 8, 100]

//## array destructing

let [m, n, ...p] = [1, 2, 3, 4, 5, 6, 7];

console.log(m); // 1
console.log(n); // 2
console.log(p); //  [3, 4, 5, 6, 7]

//## reduce()
let k = [10, 2, 3, 4, 5, 6];
let sum = k.reduce((preVal, curVal) => preVal + curVal);
console.log(sum); // 30
