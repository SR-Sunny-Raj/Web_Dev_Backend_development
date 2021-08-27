const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect(
  'mongodb+srv://admin-sunny:Cluster2413@cluster0.mgdal.mongodb.net/todolistDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const itemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model('Item', itemSchema);

const item1 = new Item({
  name: 'Welcome to your todo list!',
});
const item2 = new Item({
  name: 'Hit the + button to add a new item',
});
const item3 = new Item({
  name: '<-- Hit this to delete an item',
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});
const List = mongoose.model('List', listSchema);

app.get('/', (req, res) => {
  Item.find({}, function (err, foundItem) {
    if (foundItem.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Succesfully Saved');
        }
      });
      res.redirect('/');
    } else {
      res.render('list', { listTitle: 'Today', newListItems: foundItem });
    }
  });
});

app.get('/:customListName', (req, res) => {
  const listName = _.capitalize(req.params.customListName);
  List.findOne({ name: listName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // Create a new list
        const list = new List({
          name: listName,
          items: defaultItems,
        });
        list.save();
        res.redirect('/' + listName);
        // console.log("Doesn't Exists");
      } else {
        // Show  an existing list
        res.render('list', {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
        // console.log('Exists');
      }
    }
  });
});

app.post('/', (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const itemNew = new Item({
    name: itemName,
  });
  if (listName === 'Today') {
    itemNew.save();
    res.redirect('/');
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(itemNew);
      foundList.save();
      res.redirect('/' + listName);
    });
  }
  // let itemp = req.body.newItem;
  // if (req.body.list === 'Work') {
  //   workItems.push(itemp);
  //   res.redirect('/work');
  // } else {
  //   itemsp.push(itemp);
  //   res.redirect('/');
  // }
});

app.post('/delete', (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Deleted Succesfully');
      }
    });
    res.redirect('/');
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      function (err, foundList) {
        if (!err) {
          res.redirect('/' + listName);
        }
      }
    );
  }
});

// app.get('/work', (req, res) => {
//   res.render('list', { listTitle: 'Work List', newListItems: workItems });
// });

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});
