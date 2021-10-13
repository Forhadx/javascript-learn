/*
    -> slice()    - copy array     
    -> splice()   - delete
    -> concat()   - join 2 or more array in one array
    -> indexof(), lastIndexOf() - values index find
    -> find(), findIndex()  - find value & index
    -> filter()     - can remove if needed
    -> includes()   - return bool if the value exist or not
*/

//##    slice
let arr = [1, 2, 3, 4, 5, 6, 7];
let new1 = arr.slice();

new1.push(8);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(new1); // [1, 2, 3, 4, 5, 6, 7, 8]

let new2 = arr.slice(2, 5); // index 2 to up to 4
console.log(new2); // [3, 4, 5]

let new3 = arr.slice(5);
console.log(new3); // [6, 7]

let new4 = arr.slice(-3);
console.log(new4); // [5, 6, 7]

let new5 = arr.slice(-5, -2);
console.log(new5); // [3, 4, 5];

//## splice() - delete val
let s = ["a", "b", "c", "d", "e", "f", "g"];

let s1 = [...s];
s1.splice(2, 2);
console.log(s1); // ["a", "b", "e", "f", "g"] - 'c, d' deleted

let s2 = [...s];
s2.splice(-4, 3);
console.log(s2); // ["a", "b", "c", "g"]

let s3 = [...s];
s3.splice(3);
console.log(s3); //  ["a", "b", "c"]

let s4 = [...s];
//s4.splice(0, 3, "m"); // ["m", "d", "e", "f", "g"]
s4.splice(0, 3, "m", "n");
console.log(s4); // ["m","n" "d", "e", "f", "g"]

//## concat()

let a = [1, 2, 3];
let b = [4, 5];

let c1 = a.concat([11, 22, 33]);
console.log(c1); // [1, 2, 3, 11, 22, 33]

let c2 = a.concat(b);
console.log(c2); // [1, 2, 3, 4, 5]

let c3 = a.concat(a, b);
console.log(c3); // [1, 2, 3, 1, 2, 3, 4, 5]

//## indexof(), lastIndexOf()
let m = [11, 22, 33, 44, 33, 55];

console.log(m.indexOf(33)); // 2
console.log(m.lastIndexOf(33)); // 4    - 33 's last index

//## find(), findIndex()
let n = [
  { a: "a", n: "1" },
  { a: "b", n: "2" },
  { a: "c", n: "3" },
];

let n1 = n.find((x) => x.n === "2");
console.log(n1); // { a: "b", n: "2" }

let n2 = n.findIndex((x) => x.a === "c");
console.log(n2); // 2

let p = [11, 22, 33, 44];

let p1 = p.find((x) => x === 22);
console.log(p1); // 22

let p2 = p.findIndex((x) => x === 44);
console.log(p2); // 3

//## filter()
let x = [1, 2, 3, 4, 5, 6, 7];

let x1 = x.filter((x) => x !== 4 && x !== 5);
console.log(x1); // [1, 2, 3, 6, 7]  - 4, 5 remove

//## includes()
let y = [44, 22, 11];
console.log(y.includes(22)); // true
console.log(y.includes(66)); // false
