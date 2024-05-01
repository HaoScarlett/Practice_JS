// 202_happyNumber2

// Floyd's Cycle-finding

var isHappy = function (n) {
  function getNextNum(n) {
    // 49 % 10 --> 9 get the last digit
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit ** 2;
      n = Math.floor(n / 10); // Math.floor(4.9 --> 4)
    }
    return sum;
  }
};
