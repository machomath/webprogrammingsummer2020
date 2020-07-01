import { postAJAX } from "./ajax-functions.js";
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", function () {
  let name = signupName.value;
  let email = signupEmail.value;
  let password = signupPassword.value;
  let url = "/signup";
  let data = `name=${name}&email=${email}&password=${password}`;
  if(frontEndValidation()){
    postAJAX(url, data, success, failure);
  }
});

function frontEndValidation(){
  return true;
}

function success(msg) {
  console.log(msg);
}

function failure(msg) {
  console.log(msg);
}
