//  202_happyNumber

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // split the number into its individual digits
  // const digits = n.toString().split('').map(Number);

  // use pointer to keep track every digit, when computation is done, update the pointers
  // use hash map to keep track of each sum. If a repeated sum exists, it indicates the
  // sequence has entered a cycle, return false.
  const sumCalculated = new Set();

  while (n !== 1) {
    // n = 19 digits = [1,9]
    const digits = n.toString().split("").map(Number);
    // currentSumArray = [1, 81]
    const currentSumArray = digits.map((Number) => Number ** 2);
    // 1 + 81 = 82
    const currentSum = currentSumArray.reduce(
      (partialSum, currentNum) => partialSum + currentNum,
      0
    );
    // if currentSum isn't in sumCalculated, add it
    if (!sumCalculated.has(currentSum)) {
      sumCalculated.add(currentSum);
      n = currentSum;
    } else {
        return false;
        break;
    }
  }
  return true;
};
