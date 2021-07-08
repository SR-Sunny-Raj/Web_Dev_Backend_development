// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sunnykart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('We are connected bro');
});

const kittySchema = new mongoose.Schema({
  name: String,
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = 'Meow name is ' + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const sunnykitty = new Kitten({ name: 'sunnykitty' });
console.log(sunnykitty.name);
sunnykitty.speak();

sunnykitty.save(function (err, sunnykitty) {
  if (err) return console.error(err);
  sunnykitty.speak();
});

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });

Kitten.find({ name: 'sunnykitty' }, function (err, kittens) {
  //To give filter object to find
  if (err) return console.error(err);
  console.log(kittens);
});
