const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
  const query = req.body.cityName;
  const apiKey = '7de5f921ba18646a2d06adb4681c1a21';
  const units = 'metric';
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&units=' +
    units +
    '&appid=' +
    apiKey;
  https.get(url, (response) => {
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
      res.write('<p>The Weather is currently ' + weatherDescription + '</p>');
      res.write(
        '<h1>The Temperature in ' +
          query +
          ' is ' +
          temp +
          ' degree celcius.</h1>'
      );
      res.write('<img src =' + iconURL + '>');
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});
