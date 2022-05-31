class Square {
  constructor(_width) {
    this.width = _width;
  }

  get area() {
    return this.width * this.width;
  }

  set area(area) {
    this.width = Math.sqrt(area);
  }
}

let obj = new Square(4);

// GET
console.log(obj.area); // 16

//SET the GET
obj.area = 36;
console.log(obj.area); // 36
console.log(obj.width); // 6
