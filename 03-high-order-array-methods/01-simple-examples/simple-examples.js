const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
// total (accumulator) start at 0
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => {
  console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((num) => num > 2);
console.log(foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((num) => num % 2 == 0);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumsGreaterThanZerp = numbers.every((num) => num > 0);
