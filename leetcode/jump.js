// 55. Jump Game
var canJump = function (nums) {
  // Handle the edge case
  if(nums.length <= 1){
    return true;
  }
  
  // Keep track the farthest position you can jump, start from the first index
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + nums[i] > farthest) {
      // Update the farthest position if the current position plus the length is
      // greater than the current farthest position
      // farthest = nums[i] + farthest; -- not just update the current jump length
      farthest = Math.max(farthest, i + nums[i]);
    }
    // If farthest position is greater or equal to the last index, return true;
    if (farthest >= nums.length - 1 && farthest <= nums.length) {
      return true;
    }
  }
  // If the loop ends and farthest position doesn't reach the last index, return false.
  return false;
};
