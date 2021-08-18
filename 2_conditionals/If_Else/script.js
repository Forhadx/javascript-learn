/*  Boolean operator
        ===
        !==
        <
        >
        >=
        <=
        !


    logical operator
        ||
        && 


    conditions:
        - if
        - if else
        - if -> else if -> else
        - ternary
        - switch
*/

let a = 2;
let b = 3;

/* if else  */
if (a === 2) console.log("a is 2");
// a is 2
else console.log("a is not 2");

/* if else if   */
if (a === 5) console.log("a is 2");
else if (b === 3) {
  console.log("b is 3");
} // b is 3
else console.log("a is not 2");

/* ternary conditions */

let x = a === 2 ? "yes" : "no";
console.log(x); // yes

let y = a === 2 ? (b === 3 ? "b is 3" : "b is not 3") : "a is not 2";
console.log(y); // b is 3

/* switch case*/
let text;
num = 2;
switch (num) {
  case 1:
    text = "one";
    break;
  case 2:
    text = "two";
    break;
  default:
    text = "no value found";
}

console.log("text: ", text); // text:  two
