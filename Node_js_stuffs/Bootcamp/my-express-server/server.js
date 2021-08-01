const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Node');
});

app.get('/contact', function (req, res) {
  res.send('Contact me at: sraj1333.sr@gmail.com');
});

app.get('/about', function (req, res) {
  res.send("I'm a student who's on his way to become a developer");
});

app.listen(3000, function () {
  console.log('Server listening at port 3000');
});
