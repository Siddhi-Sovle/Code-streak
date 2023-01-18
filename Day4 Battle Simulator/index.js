const superheroes = require('superheroes');

const supervillains = require('supervillains');

let mySuperheroName = superheroes.random();

let mySupervillainName = supervillains.random();

let randomNumber = Math.floor((Math.random() * 2));

console.log("Battle of the century: " + mySuperheroName + " vs " + mySupervillainName);
setTimeout(function() {
  console.log("... They are fighting!");
}, 500);
setTimeout(function() {
  if (randomNumber >= 1) {
    console.log(mySupervillainName + " defeats " + mySuperheroName + "! The world is doomed!")
  } else {
    console.log(mySuperheroName + " defeats " + mySupervillainName + "! The world is saved!")
  }
}, 1000);
