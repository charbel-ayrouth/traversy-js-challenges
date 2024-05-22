function isPalindrome(str) {
  let reverse = "";

  let normal = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = normal.length - 1; i >= 0; i--) {
    reverse += normal[i];
    console.log(normal[i]);
  }

  if (reverse === normal) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
