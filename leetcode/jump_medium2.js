// 45. Junp Game 2
var jump = function (nums) {
  const minJump = Array(nums.length);
  minJump[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const maxJump = nums[i];
    for (let j = 1; 1 <= j <= i + maxJump; j++) {
      if (nums[j] > i + maxJump) {
        minJump[j] += 1;
      }
    }
  }
  return minJump(minJump.length - 1);
};
