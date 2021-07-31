const superheroes = require('superheroes');
const supervillains = require('supervillains');
var mySuperHero = superheroes.random();
var yourVillain = supervillains.random();
console.log(
  'My Hero is ' + mySuperHero + ' and Your Villain is ' + yourVillain
);
