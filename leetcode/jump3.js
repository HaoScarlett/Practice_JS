// 55. Jump Game Greedy solution
var canJump = function (nums) {
  // Set the goal at the last index
  let goal = nums.length - 1;
  //   Go through the array to see whether goal can reach index 0
  for (let i = goal; i >= 0; i--) {
    // If the jump value at the left nearest position is greater
    // than the current goal position
    if (i + nums[i] >= goal) {
      // goal can shift backward;
      goal = i;
    }
  }
  //   If goal can reach the index 0,
  // reversely, the last index is reachable.
  if (goal === 0) {
    return true;
  }
  return false;
};
