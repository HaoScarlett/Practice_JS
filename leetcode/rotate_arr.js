// 189. Rotate Array

var rotate = function (nums, k) {
 // Store two parts of arr seperately
  const length = nums.length;
  let backwardArr = [nums[0],...nums[k]];
  let forwardArr = [nums[length - k],...nums[length - 1]];
 // Switch their positions to rotate the elements
  nums = [forwardArr, backwardArr];
};
