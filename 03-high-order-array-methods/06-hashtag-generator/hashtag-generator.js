function generateHashtag(string) {
  if (string.trim() === "" || string.trim().split(" ").join("").length > 140) {
    return false;
  } else {
    const uppercase = string.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return `#${uppercase.join("")}`;
  }
}

module.exports = generateHashtag;
