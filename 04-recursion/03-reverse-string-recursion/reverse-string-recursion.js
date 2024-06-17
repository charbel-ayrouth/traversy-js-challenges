function reverseString(string) {
  if (string == "") {
    return "";
  }

  return string.substr(-1) + reverseString(string.slice(0, -1));
}

module.exports = reverseString;
