// 202_happyNumber2

// Floyd's Cycle-finding

var isHappy = function (n) {
  function getNextNum(number) {
    // 49 % 10 --> 9 get the last digit
    let sum = 0;
    while (number > 0) {
      const digit = number % 10;
      sum += digit ** 2;
      number = Math.floor(number / 10); // Math.floor(4.9 --> 4)
    }
    return sum;
  }

  //   Initialize two pointers
  let slow = n;
  let fast = getNextNum(n);
  while (fast !== slow) {
    
  }
  return true;
};
