// 189. Rotate Array

var rotate = function (nums, k) {
  // If k <= 0, return nums
  if (k <= 0) {
    return nums;
  }
  // Write pointer starts from index k%nums.length
  // Read pointer i starts from index 0
  let writer = k % nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (i <= writer) {
      nums[writer] = nums[i];
      writer++;
    }
    nums[i - writer - 1] = nums[i];
  }

};
