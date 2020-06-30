const express = require('express');
const https = require('https');
const apiId = require('./keys.js');
const getWeather = require('./modules/httprequest.js');
const app = express();
app.use(express.static(__dirname + "/public"));//to serve src,href
app.use(express.urlencoded({ extended: true })); //previously we used to use body-parser but not anymore.

app.set('view engine', 'ejs');//ejs tries to find "views" folder and serve views out of that folder

app.get("/", function (req, res) {
  res.render("index", {response: JSON.stringify({name: null})});
});

app.get("/common", function (req, res) {
  res.render("common");
});

app.get("/mywall", function (req, res) {
  res.render("mywall");
});

app.get("/me", function (req, res) {
  res.render("me");
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/views/page-not-found.html");
  //this one was kept as .html just for students reference
});

app.post("/", function (req, res) {
  console.log(req.body);
  ///////////
  var city = req.body.q;
  var units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?units=" + units + "&appid=" + apiId + "&q=" + city;
  //////////
  https.get(url, getWeather(res));
});

app.listen(3000, function () {
  console.log("A budding server is listening port 3000");
});
