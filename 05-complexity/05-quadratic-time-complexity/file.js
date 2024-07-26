function maxSubArraySum(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

function maxSubArraySum2(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; j++) {
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
