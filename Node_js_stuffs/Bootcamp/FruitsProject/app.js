// Requiring mongoose into our node app
const mongoose = require('mongoose');

// connecting to our database
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Checking if we successfully connected or if there was an error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  // We are connected
});

//Creating Schema
const fruitschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Fruit name is required'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Creating model based on the schema
const Fruit = mongoose.model('Fruit', fruitschema);

// Creating our document
const fruit = new Fruit({
  name: 'Mango',
  rating: 10,
  review: 'King of Fruits',
});

// Saving our document into the collection
fruit.save();

// Creating a new collection
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitschema,
});

const Person = mongoose.model('Person', peopleSchema);

// const person = new Person({
//   name: 'Sunny Raj',
//   age: 20,
//   favouriteFruit: Pineapple
// });

// const person = new Person({
//   name: 'Gunny Raj',
//   age: 50,
//   favouriteFruit: fruit,
// });

// person.save();

// const kiwi = new Fruit({
//   name: 'Kiwi',
//   rating: 5,
//   review: 'Average taste fruit',
// });

// const orange = new Fruit({
//   name: 'Orange',
//   rating: 7,
//   review: 'Sometimes its sour',
// });

// const banana = new Fruit({
//   name: 'Banana',
//   rating: 9,
//   review: 'Awesome fruit',
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('succesfully Saved');
//   }
// });

// Updation in database
// Person.updateOne(
//   { _id: '611467f714512438a0faa5bf' },
//   { favouriteFruit: fruit },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Succesfully updated');
//     }
//   }
// );

// Fruit.deleteMany(
//   {
//     name: 'Mango',
//   },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Deleted Succesfully');
//     }
//   }
// );

// Person.deleteOne({ _id: '6114c8c923d71633a06c9f2b' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Deleted Succesfully');
//   }
// });

// Reading from our database
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    fruits.forEach(function (element) {
      console.log(element.name);
    });
    mongoose.connection.close();
  }
});
