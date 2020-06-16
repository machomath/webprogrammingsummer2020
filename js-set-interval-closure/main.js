console.log("Start of the main.js code");
const place = "Kingsville";
const from = "India";

(function (p, f) {
  console.log("I am from "+ f + " and living in " + p);
})(place, from);
console.log("****************");

function tellName(name) {
  console.log("My name is: " + name);
}

let tellPlaceAndName = function (place, tellName) {
      return function (name) {
        console.log("I am from " + place);
        tellName(name)
      };
};

let nowTellName = tellPlaceAndName(place, tellName);
console.log(nowTellName);
nowTellName("Kamalish");
