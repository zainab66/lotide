const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual([head([5,6,7])], 5);
head([5,6,7])