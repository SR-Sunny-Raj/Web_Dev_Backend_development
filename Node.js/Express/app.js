const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res) => {
  res.send('This is the homepage of our first express app');
});
app.get('/about', (req, res) => {
  res.send('This is the about page of our first express app');
});
app.post('/about', (req, res) => {
  res.send('This is a post request about page of our first express app');
});
app.get('/this', (req, res) => {
  res.status(404).send('The page is not found');
});

app.listen(port, () => {
  console.log(`The application started at port ${port}`);
});
