
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };
    
const countLetters = function(string) {
  let cleanedString = string.split(" ").join('');
  let results = {};
  for (let letter of cleanedString) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      
    }}
  return results;
}; 
console.log(countLetters("Lighthouse Labs"));
assertEqual(countLetters("Lighthouse Labs").g,[1]);
assertEqual(countLetters("Lighthouse Labs").g,1);