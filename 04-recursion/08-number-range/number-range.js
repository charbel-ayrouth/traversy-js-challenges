function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

module.exports = numberRange;

// Visual Representation
// numberRange(3, 6)
// Calls numberRange(3, 5)
// Calls numberRange(3, 4)
// Calls numberRange(3, 3)
// Returns [3]
// Receives [3], pushes 4, returns [3, 4]
// Receives [3, 4], pushes 5, returns [3, 4, 5]
// Receives [3, 4, 5], pushes 6, returns [3, 4, 5, 6]
