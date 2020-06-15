function tellUser1(name, age) {
  // console.log("This user's name is " + name + " and the age is " + age);
  console.log(`This users name is ${name} and age is ${age}`);
}

var tellUser2 = function (name, age) {
  // console.log("This user's name is " + name + " and the age is " + age);
  console.log(`This users name is ${name} and age is ${age}`);
};

// tellUser2("Neha", 36);

let tellUser3 =  (name, age) => {
  // console.log("This user's name is " + name + " and the age is " + age);
  console.log("Arrow function");
  console.log(`This users name is ${name} and age is ${age}`);
};

tellUser3("Neha", 36);

var  tellUser4 = name => { console.log(`The client's name is ${name}`); };

tellUser4("Victor");
