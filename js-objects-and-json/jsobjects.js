let myFirstObject = {
  firstName: "Manthan",
  lastName: "Patel",
  age: 21,
  tellFullName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
  tellAge: function () {
    console.log(`My age is ${this.age}`);
  },
  address: {
    houseNumber: 1234,
    stName: "Armstrong Street",
    city: "Kingsville",
    code: 78363
  },
  tellAddress: function () {
    console.log(`${this.address.houseNumber} ${this.address.stName} ${this.address.city} ${this.address.code}`);
  }
};

// myFirstObject.tellFullName();
// myFirstObject.tellAddress();
let myFirstJSON = JSON.stringify(myFirstObject);
console.log(myFirstJSON);
console.log(JSON.parse(myFirstJSON));
