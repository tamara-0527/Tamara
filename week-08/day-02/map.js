'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.


var someFruits = fruits.map (function (word) {
  var letterCounter = 0;
  for (var i = 1; i < word.length; i++) {
    if (word[i] === "e") {
      letterCounter += 1;
    } 
  };
  return letterCounter;
});


console.log(someFruits)