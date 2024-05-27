function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arraySum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  if (arr.length == 0) {
    return 1;
  } else if (!arr.length) {
    return undefined;
  } else {
    return sum - arraySum;
  }
}

module.exports = findMissingNumber;
