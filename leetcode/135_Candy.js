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
  let candies = new Array(n).fill(0);
  // Iterate through the line of childre, giving them candies one by one.
  for (let i = 0; i < n - 1; i++) {
    // Increasing rating,
    candies[i] = 1;
    if (ratings[i] > ratings[i - 1]) {
      // when encounter a child with a higher rating than the previous one, give them one more.
      candies[i]++;
    }
    // Decreasing or equal ratings: consider the candies already given to their
    // neighbors and adjust accodingly to maintain the 2rd condition
    if (ratings[i] > ratings[i + 1]) {
      candies[i]++;
      if (candies[i] === candies[i - 1]) {
        candies[i - 1]++; // or while loop?
      }
    }
  }
  const totalSum = candies.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalSum;
};
