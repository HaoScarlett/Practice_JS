// 189. Rotate Array

var rotate = function (nums, k) {
  // If k <= 0, return nums
  if (k <= 0) {
    return nums;
  }
  // Write pointer starts from index k
  // Read pointer i starts from index 0
  for (let i = 0; i < nums.length; i++) {
    // When i<=k, nums[k] = nums[i]
    if (i <= k) {
      nums[k] = nums[i];
      k++;
    }
    // When i > k, nums[i-k-1] = nums[i]
    nums[i - k - 1] = nums[i];
  }
};
