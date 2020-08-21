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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }


assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
