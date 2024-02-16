var candy = function (ratings) {
  let n = ratings.length;
  // everyone has the same rating
  const allEqual = ratings.every((val, i, arr) => val === arr[0]);
  if (allEqual === true) {
    return n;
  }

  // Start from left side, move right, when encounter a higher rate, give one more candy
  let candies = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    if (ratings[i] < ratings[i + 1] && i != n - 1) {
      candies[i + 1] = candies[i] + 1;
    }
  }

  //   Move backward, move left, when encouter a higher rate, give one more candy
  for (let j = n; j > 0; j--) {
    if (ratings[j] < ratings[j - 1] && candies[j] >= candies[j - 1]) {
      candies[j - 1] = candies[j] + 1;
    }
  }

  // Calculate the total candies
  const totalSum = candies.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalSum;
};
