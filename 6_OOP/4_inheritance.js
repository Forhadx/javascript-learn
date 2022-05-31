class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  personShow() {
    console.log(`Person: ${this.name} is ${this.age} yr old.`);
  }
}

class Worker extends Person {
  constructor(_name, _age, _profession) {
    super(_name, _age);

    this.profession = _profession;
  }

  workerShow() {
    console.log(
      `Workder: ${this.name} is ${this.age} year old and a ${this.profession}`
    );
  }
}

let p = new Person("Kudus", 44);
p.personShow();

let w = new Worker("Forhad", 25, "CSE");
w.workerShow();

/*
    Person: Kudus is 44 yr old.
    Workder: Forhad is 25 year old and a CSE
*/
