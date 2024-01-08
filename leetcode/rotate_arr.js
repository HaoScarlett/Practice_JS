// 189. Rotate Array

var rotate = function (nums, k) {
  // Store two parts of arr seperately
  const length = nums.length;
  let backwardArr = nums.slice(0, k);
  let forwardArr = nums.slice(k);
  // Switch their positions to rotate the elements
  nums = [forwardArr, backwardArr];
};
