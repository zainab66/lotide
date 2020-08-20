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

const flatten = function(arr) {
  let flatArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(flatten(element));
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
