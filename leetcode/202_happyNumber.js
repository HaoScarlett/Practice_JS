//  202_happyNumber

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const sumCalculated = new Set();

  while (n !== 1) {
    // // split the number into its individual digits
    // n = 19 digits = [1,9]
    const digits = n.toString().split("").map(Number);
    // currentSumArray = [1, 81]
    const currentSumArray = digits.map((digit) => digit ** 2);
    // 1 + 81 = 82
    const currentSum = currentSumArray.reduce(
      (partialSum, currentNum) => partialSum + currentNum,
      0
    );
    // 🔸 const currentSum = digits.reduce((sum,digit) => sum + digit ** 2, 0);

    // detect the cycle first
    if (sumCalculated.has(currentSum)) {
      return false;
    }
    sumCalculated.add(currentSum);
    n = currentSum; // update n to the new sum
  }
  return true; // the number is happy when we reached 1
};
