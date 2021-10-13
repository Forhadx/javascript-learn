// reverse string

let str = "hello friend";
let n = "";

for (let i = 0; i < str.length; i++) {
    n = str[i] + n;
}

console.log(n); // "dneirf olleh"

// remove duplicate from array

let arr = [5, 2, 2, 4, 5, 2, 3, 1];

let res = [...new Set(arr)];
console.log(res); // [ 5, 2, 4, 3, 1 ]

// find max value
let arr2 = [5, 2, 2, 4, 50, 2, 3, 1];
let max = arr2[0];
for (let i = 0; i < arr2.length; i++) {
    if (max < arr2[i]) {
        max = arr2[i];
    }
}
console.log(max);

// another
console.log(Math.max(...arr2)); // 50
console.log(Math.min(...arr2)); // 1

// factorial
function fac(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}
console.log(fac(5));
