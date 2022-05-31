class Box {
  constructor() {
    console.log("box is created!");
  }
}

class Ractangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  show() {
    console.log("width: ", this.width, " - height: ", this.height);
    return this.width * this.height;
  }
}

let obj1 = new Box();

let obj2 = new Ractangle(2, 3);
console.log(obj2.show());

/*
output:

box is created!
width:  2  - height:  3
6

*/
