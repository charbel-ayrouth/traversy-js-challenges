function validAnagrams(string1, string2) {
  const countObject1 = string1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const countObject2 = string2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  // extract the keys of obj1, then loop through the char
  return Object.keys(countObject1).every(
    (char) => countObject1[char] === countObject2[char]
  );
}

module.exports = validAnagrams;
