console.log(this); // window   obj

//----------------------------------------
const ob = {
  name: "max",
  show1: function () {
    return "s1 = " + this.name; // this refer the ob name
  },
  show2: function () {
    return "s2 = " + this.name; // this refer the ob show1 fn
  },
  show3: function () {
    return this.show1() + "!!!";
  },
};

console.log(ob.show1()); // s1 = max
console.log(ob.show2()); // s2 = max
console.log(ob.show3()); // s1 = max!!!
