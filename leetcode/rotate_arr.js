// 189. Rotate Array

var rotate = function (nums, k) {
  const length = nums.length;
  // Ensure k is within the array's bounds
  k = k % length;
  // Store two parts of arr seperately
  let backwardArr = nums.slice(0, length - k);
  let forwardArr = nums.slice(length - k);
  // Clear nums array
  nums.length = 0;
  // Switch their positions to rotate the elements
  nums.push(...forwardArr);
  nums.push(...backwardArr);

  return nums;
};
