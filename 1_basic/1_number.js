/*
    javascript
        - Dynamic, weakly types programming language
            ( data type assume automatically, )
        - interpreted, 'on the fly' complied language  
            (code run, change, parse an runtime)
        - Run code in a browser
        - Run in diffrent environment

    how to run
        - js code -> compile in machine code - execute machine code
    

    
*/

//---------------------------------------------------------------------------

//console.log("hi");
//alert("hellow bro");

// single Comment   //...
// multiple line comment /* ...*/

//---------------------------------------------------------------------------

/*  variable
        - only variable name
        - var
        - let
        - const
*/

f = "he";
console.log(f); // he

console.log("--------------------------------------------------------------");

/* 
    operator
        +
        -
        *
        /
        %
        **  (power, exponentiation)

        ++
        --

        +=
        -=
        *=
        /=

*/

console.log(3 + "3"); //'33' string

console.log(3 - "3"); // 0 minus
console.log(3 * "3"); // 9 multiple
console.log(3 / "3"); // 1 division

console.log("--------------------------------------------------------------");

/* Data Types
        - number:    2, 3.4 
        - string:    'hi', "hi", `hi`
        - boolean:     true, false
        
        - objects:      {name: 'jack', age: 39}
        - array:        [1, 3, 4]



    -> toFixed(4)   // take 4 decimal number after decimal point 
    -> line break \n
    -> tab  \t
        
*/
console.log("hello\tbrother"); // hello	brother

let a = 12.2345234;
console.log(a.toFixed(3)); //12.235
console.log("--------------------------------------------------------------");

/*  data Typeof  */
let name = "max";
console.log(typeof name); //string

let num = 23.32;
console.log(typeof num); // number

let bo = true;
console.log(typeof bo); // boolean

let arr = [1, 3, 4];
console.log(typeof arr); // object

let ob = { name: "max" };
console.log(typeof ob); // object

// undefine , NaN, null
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof NaN); //number

console.log("--------------------------------------------------------------");

/*
    convert Data type
*/

let x = 12.32;
console.log(x.toString()); // 12.32 string
console.log(parseInt(x)); // 12 int
console.log(parseFloat(x)); // 23.32 float

let s = "23.54";

console.log(parseInt(s)); // 23 int
console.log(parseFloat(s)); // 23.54 float

console.log(+s); // num: 12.32   , unary operator

console.log("--------------------------------------------------------------");

/*  undefine, NaN, null
        - undefine: default value of uninitialzed
        - NaN: calculation error
        - null: never assube by default

*/

let aa;
console.log(aa); // undefined

aa = null;
console.log(aa); // null

let b = 3 * "hi";
console.log(b); // NaN
