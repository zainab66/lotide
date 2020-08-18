
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
  
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
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) { 
    console.log('Arrays are equal!')
  } else {
    console.log('Arrays are NOT equal!')
  }

}

const without = function(source, itemsToRemove) {

  let returnArr = [];
  
  for (let i = 0; i < source.length; i ++) {
    let removeElem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeElem = true;
      }
    }
    if (removeElem === false) {
      returnArr.push(source[i]);
    }
  }

  return returnArr;

}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

