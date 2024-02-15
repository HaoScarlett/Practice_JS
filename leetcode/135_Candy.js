// 135. Candy
// param {ratings[]},return{number}

// 🐥 maitain the "more candies than neighbors" while minimizing candy usage

// Each children receives at least one candy.
// Initialize the distribution by starting giving one candy to each child

var candy = function (ratings) {
  let n = ratings.length;
  // Edge cases
  // 1. input arr.length is 1
  if (n === 1) {
    return 1;
  }
  // 2. All the ratings are equal
  const allEqual = ratings.every((val, i, arr) => val === arr[0]);
  if (allEqual === true) {
    return n;
  }

  // Initialize candies arr to track distributed candies.
  // Iterate through the line of childre, giving them candies one by one.
  let candies = new Array(n).fill(1);
  let hasChanged = true;
  while (hasChanged) {
    hasChanged = false;

    for (let i = 0; i < n; i++) {
      // Increasing rating,
      // candies[i] = 1;
      if (i > 0 && ratings[i] > ratings[i - 1]) {
        // when encounter a child with a higher rating than the previous one, give them one more.
        if (candies[i] <= candies[i - 1]) {
          candies[i] = candies[i - 1] + 1; // You know is previous child's candies
          hasChanged = true;
        }
      }
      // Decreasing or equal ratings: consider the candies already given to their
      // neighbors and adjust accodingly to maintain the 2rd condition
      if (i != n - 1 && ratings[i] > ratings[i + 1]) {
        if (candies[i] <= candies[i + 1]) {
          candies[i] = candies[i + 1] + 1;
          hasChanged = true;
        }
      }
    }
  }
  const totalSum = candies.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalSum;
};
