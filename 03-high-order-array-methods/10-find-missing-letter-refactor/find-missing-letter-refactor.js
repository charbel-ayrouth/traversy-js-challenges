function findMissingLetter(array) {
  const unicodeArray = array.map((char) => char.charCodeAt());

  const missignCode = unicodeArray.filter((char, index) => {
    // console.log(unicodeArray[index + 1], char);
    return unicodeArray[index + 1] - char !== 1;
  })[0];

  return String.fromCharCode(missignCode + 1);
}

module.exports = findMissingLetter;
