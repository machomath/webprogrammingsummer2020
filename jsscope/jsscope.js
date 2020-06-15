var x;
console.log(x);
x = 4.56;
console.log(x);
x = "Any string";
console.log(x);
x = ["A string", 3.22, true];
console.log(x);
console.log(x.length);
var y = "I am y";
x.push(y);
console.log(x);
var z = x.pop();
console.log(z);
console.log("**********************");
for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}
console.log("**********************");
