function getWeather(res) {
  return function (response) {
    response.on('data', function (data) {
      res.render("index", {response: data});
    });
    response.on('error', (e) => {
      console.error(e);
    });
  };
}

module.exports = getWeather;
