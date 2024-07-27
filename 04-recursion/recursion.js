function sumUpTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumUpTo(n - 1);
}

function reverseString(str) {
  if (str === "") {
    return "";
  }

  str.slice(-1) + reverseString(str.slice(0, -1));
}

function FibonacciSequence(num) {
  if (num < 2) {
    return num;
  }

  return FibonacciSequence(num - 1) + FibonacciSequence(num - 2);
}

function Factorial(num) {
  if (num < 2) {
    return 1;
  }

  return num * Factorial(num - 1);
}

function Power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * Power(base, exponent - 1);
}

function ArraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + ArraySum(arr.slice(1));
}

function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

function permutations(str) {
  let result = [];

  if (str.length === 0) {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
}
