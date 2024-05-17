// 167_twoSum
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let index1 = 0;
  let index2 = 1;

  let sum = numbers[index1] + numbers[index2];
  while (sum !== target) {
    if (index2 < numbers.length) {
      index2++;
    } else if (index1 < numbers.length - 1) {
      index1++;
    }
  }
  return [index1, index2];
};
