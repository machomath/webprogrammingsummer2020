let button = document.getElementById("ask-button");
let form = document.getElementById("ask-form");
let radio = document.querySelectorAll('input[type="radio"]')
let outPut = document.getElementById("output");
// console.log(radio);
function getName(url, successFunction, failuerFunction) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if(xhr.status == 200){
      successFunction(xhr.responseText);
    }else{
      failuerFunction(xhr.status)
    }
  };
  xhr.send();
}

function successFunction(msg) {
  console.log("Success: " + msg);
  let obj = JSON.parse(msg);
  outPut.innerHTML = "Your name suggestion is: " + obj.name;
}

function failuerFunction(msg) {
  console.log("Failure: " + msg);
}


button.addEventListener("click", function () {
  let g;
  radio.forEach((item, i) => {
    if(item.checked){
      g = item.value;
    }
  });
  let url = "../phpserver/randname.php?g="+g;

  getName(url, successFunction, failuerFunction);
});
