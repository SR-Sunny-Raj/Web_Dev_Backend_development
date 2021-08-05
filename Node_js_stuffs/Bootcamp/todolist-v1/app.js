const express = require('express');
const bodyParser = require('body-parser');
const getDate = require('./date');
const app = express();

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let day = getDate();
  res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});
