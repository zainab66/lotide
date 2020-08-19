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
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS



  const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        if (!results[sentence[i]]) {results[sentence[i]] = [];}
        results[sentence[i]].push(i);
      }
    }
    return results;
  };
  
  console.log(letterPositions("lighthouse in the house"));
  assertArraysEqual(letterPositions("hello").e, [1]);
