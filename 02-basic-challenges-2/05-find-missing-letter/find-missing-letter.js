function findMissingLetter(arr) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startIndex = alphabet.indexOf(arr[0]); // 0 , alphabet[startIndex] = a

  if (arr.length == 0) {
    return "";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== alphabet[startIndex + i]) {
        return alphabet[startIndex + i];
      }
    }
  }
}

module.exports = findMissingLetter;
