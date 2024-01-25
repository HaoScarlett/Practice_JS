// 45. Jump Game 2 Greedy strategy
var jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  // Initialize the minJump
  let minJump = 0;
  // Set two pointers to tell us the window
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = 1; i <= right; i++) {
      farthest = Math.max(farthest, nums[i] + i);
    }
    left = right + 1;
    right = farthest;
    minJump += 1;
  }
  return minJump;
};
