const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
    it("Should return [6, 7] when given [3, 6, 7]", () => {
        assert.deepEqual(tail([3, 6, 7]), [6, 7]);
      });
    
    it("", () => {
        assert.deepEqual(assertEqual(tail(words.length), 3));
      });
  });



 