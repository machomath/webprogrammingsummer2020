var y;
console.log("At dec y is: " + y);
function tellUser(name, age) {
  var x = 10;
  y  = 100;
  console.log("The var x is defined within tellUser:" + x );
  console.log("The client's name is " + name + " and age is " + age);
  // alert("The client's name is " + name + " and age is " + age)
}

console.log("y is: " + y);
tellUser("Raj Sahu", 30);
tellUser("Frank Lewis", 60);
// console.log(x); //x is not denined here
console.log(y);
