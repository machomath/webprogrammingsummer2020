const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));//to serve src,href
app.use(express.urlencoded({ extended: true })); //previously we used to use body-parser but not anymore.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/common", function (req, res) {
  res.sendFile(__dirname + "/views/common.html");
});

app.get("/mywall", function (req, res) {
  res.sendFile(__dirname + "/views/mywall.html");
});

app.get("/me", function (req, res) {
  res.sendFile(__dirname + "/views/me.html");
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/views/page-not-found.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("A budding server is listening port 3000");
});
