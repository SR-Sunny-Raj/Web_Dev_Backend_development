const express = require('express');
const app = express();
const path = require('path');
const port = 80;
// For Serving Static files
// EXPRESS SPECIFIC STUFFS
app.use('/static', express.static('static'));

// Set the template engine as pug
// PUG SPECIFIC STUFFS
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

const con = 'This is the best content';
const params = { title: 'Pubg is the best game', content: con };
// Our pug demo endpoint
// ENDPOINTS
// app.get('/demo', (req, res) => {
//   res
//     .status(200)
//     .render('demo', { title: 'Hey Sunny', message: 'Hello there' });
// });
app.get('/', (req, res) => {
  res.status(200).render('index.pug', params);
});

// app.get('/', (req, res) => {
//   res.send('This is the homepage of our first express app');
// });
// app.get('/about', (req, res) => {
//   res.send('This is the about page of our first express app');
// });
// app.post('/about', (req, res) => {
//   res.send('This is a post request about page of our first express app');
// });
// app.get('/this', (req, res) => {
//   res.status(404).send('The page is not found');
// });

app.listen(port, () => {
  console.log(`The application started at port ${port}`);
});
