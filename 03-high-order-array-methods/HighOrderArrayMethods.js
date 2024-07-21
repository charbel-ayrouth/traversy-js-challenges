function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((total, num) => total + num, 0);
}

// console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));

function calculateTotalSalesWithTax(products, taxRate) {
  let totalSales = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return totalSales + (totalSales * taxRate) / 100;
}

// console.log(
//   calculateTotalSalesWithTax(
//     [
//       { name: "Apple", price: 0.5, quantity: 10 },
//       { name: "Banana", price: 0.3, quantity: 20 },
//       { name: "Orange", price: 0.6, quantity: 15 },
//     ],
//     8
//   )
// );

function highestScoringWord(str) {
  let words = str.split(" ");

  const scores = words.map((word) => {
    let score = 0;

    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }

    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}

function highestScoringWord2(str) {
  const words = str.split(" ");

  const scores = words.map((word) => {
    return Array.from(word).reduce((score, letter) => {
      return score + letter.charCodeAt(0) - 96;
    }, 0);
  });

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

// console.log(highestScoringWord2("man i need a taxi up to ubud"));

function validAnagrams(str1, str2) {
  const frequencies1 = str1.split(" ").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const frequencies2 = str2.split(" ").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequencies1).every(
    (char) => frequencies1[char] === frequencies2[char]
  );
}

function generateHashtag(str) {
  const text = str
    .trim()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

  if (text.length > 140) return false;
  else return `#${text}`;
}
// console.log(generateHashtag("JavaScript is awesome"));

function isValidIPv4(input) {
  const arr = input.split(".");

  if (arr.length !== 4) return false;

  return arr.every((octet) => {
    const num = parseInt(octet);

    return num >= 0 && num <= 255 && octet === num.toString();
  });
}

// console.log(isValidIPv4("1.2.3.4"));

function analyzeCarMileage(cars) {
  const total = cars.reduce((total, car) => total + car.mileage, 0);
  const average = total / cars.length;

  const highestMileageCar = cars.reduce((highest, car) => {
    if (car.mileage > highest.mileage) return car;
    else return highest;
  }, cars[0]);

  const lowestMileageCar = cars.reduce((lowest, car) => {
    if (car.mileage < lowest.mileage) return car;
    else return lowest;
  }, cars[0]);

  return {
    averageMileage: parseFloat(average.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage: total,
  };
}

function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}

function findMissingLetter(array) {
  let start = array[0].charCodeAt(0);

  const missingCharCode = array
    .slice(1)
    .map((char) => char.charCodeAt())
    .find((current) => {
      if (current - start > 1) {
        return true;
      }

      start = current;

      return false;
    });

  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}

function findMissingLetter2(array) {
  const missingCharCode = array.filter((char, index) => {
    if (index === 0) return false;

    const prevCharCode = arr[index];
  });
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
