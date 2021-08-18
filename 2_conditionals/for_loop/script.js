/*  for loops
       for loop
       for-of loop
       for-in loop
       
       break
       continue * do?
*/

let arr = [55, 66, 22, 44, 11, 33];

// for loop
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]); // op:  55 66 22 44 11 33
}

// for of loop
for (const el of arr) {
  // console.log(el); // op:  55 66 22 44 11 33
}

// for in loop
for (const key in arr) {
  // console.log(key); // op:  0 1 2 3  4 5
  // console.log(arr[key]); // op:  55 66 22 44 11 33
}

// break
i = 0;
for (i of arr) {
  //console.log(i);
  if (i === 66) {
    // console.log("i: ", i);
    break;
  } else {
    //console.log("i is not 66");
  }
}
