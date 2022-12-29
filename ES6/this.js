// THIS

//===== Function
const test = {
  name: "forhad",
  show: function () {
    console.log(this.name);
  },
};
test.show(); // forhad

//===== Global context, object converstion
// console.log(this === window); // this is applicable for browser

let obj = {
  a: "forhad",
};
var a = "aaa";

function showA() {
  console.log(this.a);
}

showA(); // undefine
showA.call(obj); // forhad
showA.apply(obj); // forhad

//===== as class constructor
class Box {
  constructor(_a) {
    this.a = _a;
  }
}
let b = new Box(10);
console.log(b.a); // 10

//=== Set , get in class
class shape {
  set area(a) {
    this.a = a;
  }
  get area() {
    return this.a;
  }

  show() {
    console.log("this is a: ", this.a);
  }
}

let s = new shape();
s.area = 22;
s.show(); // this is a:  22
