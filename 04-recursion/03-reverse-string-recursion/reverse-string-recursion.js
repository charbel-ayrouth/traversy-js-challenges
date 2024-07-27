function reverseString(string) {
  if (string == "") {
    return "";
  }

  return string.slice(-1) + reverseString(string.slice(0, -1));
}

module.exports = reverseString;
