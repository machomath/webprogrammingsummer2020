const express = require('express');
const app = express();

app.get("/", function (req, res) {
  res.write("<h1>Welcome to express server</h1>");
  res.write("<p>This res is written line by line</p>");
  res.write("<p>If you do not want to restart the server agian and again use npm i nodemon, and then start the server by nodemon app.js</p>")
  res.write(`
    <form class="" action="index.html" method="post">
      <input type="text" name="q" placeholder="City">
      <button type="button" name="getWeather">Get</button>
    </form>
    `);
  res.send();
});

app.listen(3000, function () {
  console.log("A welcome server at port 3000");
});
