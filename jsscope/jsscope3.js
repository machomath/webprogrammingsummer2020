var anArray = ["US", "IN", "PK", "CH", "UK"];

for (var i = 0; i < anArray.length; i++) {
  console.log(anArray[i])
}

console.log(i);

for (let j = 0; j < anArray.length; j++) {
  console.log(j);
}

// console.log(j); //let has a block scope

const aConst = [2.33];
console.log(aConst);
// aConst = "Another entity"; //This cannot be done
aConst[0] = "Another entity"
console.log(aConst);
console.log("We cannt reassign a const but we can change its internal component for array and object");
