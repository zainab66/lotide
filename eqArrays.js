const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  let correct = true;
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[i]) {
      correct = false;
    }
  }
  if (arr1.length !== arr2.length) {
    correct = false;
  } 
  

  return correct;

}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
module.exports = eqArrays;
