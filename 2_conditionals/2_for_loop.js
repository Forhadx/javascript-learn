/*  for loops
       for loop
       for-of loop
       for-in loop
       
       break
       continue * do?
*/

let arr = [55, 66, 22, 44, 11, 33];

// for loop
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // op:  55 66 22 44 11 33
}
console.log("--------------------------------------------------------------");

// for of loop
console.log("for...of loop");
for (const el of arr) {
  console.log(el); // op:  55 66 22 44 11 33
}
console.log("--------------------------------------------------------------");

// for in loop
console.log("for..in loop");
console.log("key  val");
for (const key in arr) {
  console.log(key, " ", arr[key]); // op:  0 1 2 3  4 5
  console.log(); // op:  55 66 22 44 11 33
}
console.log("--------------------------------------------------------------");

console.log("forEach loop");
arr.forEach((i) => {
  console.log(i); // op:  55 66 22 44 11 33
});

// break
console.log("break..");
i = 0;
for (i of arr) {
  console.log(i);
  if (i === 66) {
    console.log("i: ", i);
    break;
  } else {
    console.log("i is not 66");
  }
}
