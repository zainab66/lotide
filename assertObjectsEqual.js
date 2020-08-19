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
  
  const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if ((typeof(object1[key]) !== typeof({}) && typeof(object2[key]) !== typeof({})) && (object1[key] !== object2[key])) {
        return false;
      } else if ((typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) && eqObjects(object1[key], object2[key]) === false) {
        return false;
      } else if (typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) {
        eqObjects(object1[key], object2[key]);
      }
    }
    return true;
  };
  
  
  


const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    if (eqObjects(actual, expected)) {
        console.log(`✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
      };

      const cd = { c: "1", d: ["2", 3] };
      const dc = { d: ["2", 3], c: "1" };
      console.log(assertObjectsEqual(cd, dc)); // => true
      
      const cd2 = { c: "1", d: ["2", 3, 4] };
      console.log(assertObjectsEqual(cd, cd2)); // => false
