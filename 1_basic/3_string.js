/*
    
*/

/// trim()  - not working

let str = "hi borher     , where          is this";
let str1 = str.trim();
console.log(str1);

// split()

let data = "daka;12;1230";
const newData = data.split(";");
console.log(newData); // ["daka", "12", "1230"]

// join()
let a = ["i", "love", "data"];

let a1 = a.join();
console.log(a1); // i,love,data

let a2 = a.join(" ");
console.log(a2); // i love data
