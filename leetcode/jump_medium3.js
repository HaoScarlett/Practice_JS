// 45. Jump Game 2 Greedy strategy
var jump = function (nums) {
  // Initialize the minJump
  let minJump = 0;
  // Set two pointers to tell us the window
  let left = 0;
  let right = 1;

  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i in (1, r + 1)) {
      farthest = Math.max(farthest, nums[i] + i);
      left = right + 1;
      right = farthest;
    }
    minJump += 1;
  }
  return minJump;
};
