const express = require('express');
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Welcome to express server</h1>");
});

app.listen(3000, function () {
  console.log("A welcome server at port 3000");
});
