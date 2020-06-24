let input = document.querySelector("input");
let button = document.querySelector("button");
let appid = "10a05647229e7a1def0975d4dd09ce26";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + appid + "&q=";
let op = document.getElementById("op");
button.addEventListener("click", function () {
  let city = input.value;
  url += city;
  // console.log(url);
  getWeather(url, success, failure);
});

function success(msg) {
  console.log(msg);
  msg = JSON.parse(msg);
  op.innerHTML = "<b>" + msg.weather[0].main + "</b><br>";
  op.innerHTML += msg.weather[0].description + "<br>";
  op.innerHTML += "Temperature is: " + msg.main.temp + "C<br>";
  http://openweathermap.org/img/wn/10d@2x.png
  op.innerHTML += '<img src="https://openweathermap.org/img/wn/' + msg.weather[0].icon +'@2x.png" alt="">'


}

function failure(msg) {
  console.log(msg);
}

function getWeather(url, success, failure) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
      if(xhr.status === 200){
        success(xhr.responseText);
      }else{
        failure(xhr.status)
      }
  };
  xhr.send();
}
