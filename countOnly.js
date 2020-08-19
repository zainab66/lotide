 
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };


  const countOnly = function(allItems, itemsToCount) {
    const results = {};
  
    for (const item of allItems) {
      console.log(item);
    }
  
    return results;
  }

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  






  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual(1, 2);