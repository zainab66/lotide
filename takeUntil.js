
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

const takeUntil = function(array, callback) {
    const results = [];
    for (let x of array) {
      if (!callback(x)) {
        results.push(x);
      } else {
        break;
      }
    }
    return results;
  };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
