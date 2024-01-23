var canJump = function (nums) {
  let length = nums.length;
  // Initialize the canReach table with false for all indices
  let canReach = Array(length).fill(false);
  // The first one can always be reached
  canReach[0] = true;

  // Iterate the nums to check every element's reachability
  for (let i = 0; i < nums.length; i++) {
    // If you can reache the current stone,
    // update the canReach table for the next one
    if (canReach[i]) {
      for (let j = 1; j <= nums[i] && i + j < length; j++) {
        canReach[i + j] = true;
      }
    }
  }
  return canReach[length - 1];
};
