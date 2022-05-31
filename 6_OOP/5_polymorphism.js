//-------- overloading ------
class Shape {
  area(len) {
    console.log("len: ", len);
  }
  area(len, wid) {
    console.log(`len: ${len} & width: ${wid}`);
  }
}

let s = new Shape();
s.area(3);
s.area(4, 5);

/* output
    len: 3 & width: undefined
    len: 4 & width: 5

    last area method execute always
*/

//--------- overrinding -------

class Animal {
  eat() {
    console.log("Animal...");
  }
}

class Dog extends Animal {
  eat() {
    console.log("Dog...");
  }

  bark() {
    console.log("dog barking");
  }
}

let d = new Dog();

// override the parent eat()
d.eat(); // Dog...

d.bark(); // dog barking

/*
    Dog...
    dog barking
*/
