// 45.Jump Game 2
var jump = function (nums) {
  let n = nums.length;

  // Initalize an array to store the minimum jump needed to reach the end
  const minJump = Array(n).fill(Infinity);
  // The minimum jump need to reach the first position
  minJump[0] = 0;

  for (let i = 0; i < n; i++) {
    // Check the maximum jump
    const maxJump = nums[i];
    // Update the minimum jumps for each position reachable from the current position.
    // minJump[i] = i + jump(minJump[i]);
    for (let j = 1; j <= maxJump && i + j < n; j++) {
      minJump[i + j] = Math.min(minJump[i + j], minJump[i] + 1);
    }
  }
  return minJump[n - 1];
};
