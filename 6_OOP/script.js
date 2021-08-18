// encalsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    return `name ${this.name} and age ${this.age}`;
  }
}

const p1 = new Person("max", 29);
console.log(p1.show());

const p2 = new Person("forhad", 24);
console.log(p2.show());

//--------------------------------------------
//inheritance
class Vehicles {
  constructor(wheel, seat) {
    this.wheel = wheel;
    this.seat = seat;
  }
  show() {
    return `wheel: ${this.wheel} and seat: ${this.seat}`;
  }
}

class Bus extends Vehicles {
  constructor(wheel, seat, name) {
    super(wheel, seat);
    this.name = name;
  }
}

const ob = new Bus(4, 5, "bus");
console.log(ob.show());
