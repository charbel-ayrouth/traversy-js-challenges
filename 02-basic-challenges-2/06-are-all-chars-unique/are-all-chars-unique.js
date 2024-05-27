function areAllCharactersUnique(str) {
  const charCount = {}; // {a: true, b: true, ...}

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char]) {
      //if char is in the object
      return false;
    }

    charCount[char] = true;
  }

  return true;
}

module.exports = areAllCharactersUnique;
