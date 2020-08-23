const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

  

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) { 
    console.log('Arrays are equal!')
  } else {
    console.log('Arrays are NOT equal!')
  }

}
module.exports = assertArraysEqual;
