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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log((eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false