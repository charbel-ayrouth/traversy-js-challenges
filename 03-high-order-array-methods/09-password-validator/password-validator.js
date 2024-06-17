function validatePassword(string) {
  const array = string.split("");

  const hasDigit = array.some((element) => {
    return parseInt(element) > 0;
  });

  const isLenghtValid = string.length >= 8;

  const hasLowercase = array.some(
    (char) => char === char.toLowerCase() && char !== char.toUpperCase()
  );

  const hasUppercase = array.some(
    (char) => char === char.toUpperCase() && char !== char.toLowerCase()
  );

  return hasDigit && isLenghtValid && hasLowercase && hasUppercase;
}

module.exports = validatePassword;
