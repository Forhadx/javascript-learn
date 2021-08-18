/*  Array
    - create array
    - push(), pop(), unshift(), shift()
*/

// create array

let a1 = [];
let a2 = new Array(5);
let a3 = Array(5);

// push(), pop(), unshift(), shift()
let arr = [1, 2, 3, 4, 5];

arr.push(22);
console.log(arr); // [1, 2, 3, 4, 5, 22]   - add 22 in last

arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]        - remove 22 from last

arr.unshift(99);
console.log(arr); //  [99, 1, 2, 3, 4, 5]       // add 99 in first

arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]      // remove 99 from fist

// Reference array
let a = [1, 2, 3];
let b = a;

b.push(4);
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4] - same value cz a,b reference same address

// copy array
let c = [...a];
c.push(11);

console.log(a); // [1, 2, 3, 4]
console.log(c); // [1, 2, 3, 4, 11]
