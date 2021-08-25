const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const _ = require('lodash');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// getting-started.js
mongoose.connect('mongodb://localhost:27017/wikiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model('Article', articleSchema);

///////////////////////////////// Request Targetting All the articles ////////////////////////////////

app
  .route('/articles')
  .get((req, res) => {
    Article.find({}, (err, foundItem) => {
      if (!err) {
        res.send(foundItem);
      } else {
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send('Data saved succesfully');
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (!err) {
        res.send('Deleted all the articles succesfully');
      } else {
        res.send(err);
      }
    });
  });

///////////////////////////////// Request Targetting a Specific articles ////////////////////////////////

app
  .route('/articles/:articleTitle')
  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send('No article matching that title was found');
      }
    });
  })
  .put((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.send('Article updated succesfully');
        }
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (!err) {
          res.send('Article updated successfully');
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send('Article deleted successfully');
      } else {
        res.send(err);
      }
    });
  });

// Ports
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, () => {
  console.log('Server has started succesfully');
});
