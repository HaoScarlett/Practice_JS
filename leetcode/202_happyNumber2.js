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
  //   the loop continues until fast reached 1 at any time  or slow meets fast
  while (fast !== 1 && fast !== slow) {
    slow = getNextNum(slow);
    let nextNode = getNextNum(fast); // fast move two steps at a time
    fast = getNextNum(nextNode);
  }
  return fast === 1;
};
