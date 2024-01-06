// 189. Rotate Array

var rotate = function (nums, k) {
  // If k <= 0, return nums
  if (k <= 0) {
    return nums;
  }
  // Create an empty arr to store the rotated nums
  let rotatedArr = [];

  // Iterate through two string simultaneously
  // Write pointer of rotatedArr start from index k
  for (let i = 0; i < nums.length; i++) {
    for (let j = k; j < nums.length; j++) {
      // When i <= k, rotatedArr write nums[i]
      if (i <= k) {
        rotatedArr[j] = nums[i];
      }
      // When i > k, nums[i-k-1] = nums[i]
      else{
            j=0;
          rotatedArr[i - k - 1] = nums[i];
      }
    }
  }
  return rotatedArr;
};
