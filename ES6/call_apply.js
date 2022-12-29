/*
    call and apply same just apply use [] array for sent data
*/

// EX: 1
let person = {
  name: "forhad",
  age: 25,
};

function show(city, country) {
  console.log(`${this.name} age ${this.age}. live in ${city}-${country}`);
}

show.call(person, "Dhaka", "Bangladesh"); // forhad age 25. live in Dhaka-Bangladesh
show.apply(person, ["london", "England"]); // forhad age 25. live in london-England

// EX: 2

let name1 = {
  fName: "shamsul",
  lName: "Haque",
  fullName: function () {
    console.log(`${this.fName} ${this.lName}`);
  },
};

let name2 = {
  fName: "ha",
  lName: "mim",
};

name1.fullName(); // shamsul Haque
name1.fullName.call(name2); //ha mim
name1.fullName.apply(name2); //ha mim
