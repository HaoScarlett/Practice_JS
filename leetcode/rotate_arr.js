// 189. Rotate Array

var rotate = function (nums, k) {
  // If k <= 0, return nums
  if (k <= 0) {
    return nums;
  }
  // Write pointer starts from index k%nums.length
  // Read pointer i starts from index 0
  let writer = k % nums.length;
  let rotatedArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i <= writer) {
        rotatedArr[writer] = nums[i];
      writer++;
    }
    rotatedArr[i - writer - 1] = nums[i];
  }
  nums = rotatedArr;
};
