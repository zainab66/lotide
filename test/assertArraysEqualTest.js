const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
