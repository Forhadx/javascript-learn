/*
let a = 0;
let b = 2;
let x = b / a;
console.log(x);
throw { message: "type error" }; // Uncaught {message: "type error"}
*/

try {
  let a = 0;
  let b = 2;
  let x = b / a;
  console.log(x);
} catch (error) {
  console.log("error: ", error);
}
console.log("yes");

//op:
// infinity
// yes
