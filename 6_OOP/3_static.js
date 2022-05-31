class Square {
  constructor(_width) {
    this.width = _width;
  }

  static equals(a, b) {
    return a.width === b.width;
  }

  static show() {
    console.log("This is static function.");
  }
}

let obj1 = new Square(8);
let obj2 = new Square(9);

console.log(Square.equals(obj1, obj2));

Square.show();

/*
    false
    This is static function.
*/
