//var
console.log(x); // undefined
var x = 5;
console.log(x); // 5

//console.log(y); // give an error
let y = 2;
console.log(y); // 2

console.log("--------------------------------------------------------------");
// var
for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i); // run
}
console.log("Outside the loop:", i); // run

console.log("--------------------------------------------------------------");
//let
for (let j = 0; j < 5; j++) {
    console.log("Inside the loop:", j); // run
}
//console.log("Outside the loop:", j); // not running: j is not defined

console.log("--------------------------------------------------------------");
//var
var counter = 10;
var counter;
console.log(counter); // 10

//let
let ct = 10;
// let ct; // error
