// 45. Junp Game 2
var jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  if (nums.length <= 2) {
    return 1;
  }
  const minJump = Array(nums.length).fill(Infinity);
  minJump[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    const maxJump = nums[i];
    for (let j = 1; 1 <= j && j <= i + maxJump; j++) {
      //   check if the jump from position j can reach the current position i.
      if (i + nums[i] >= j) {
        minJump[j] = Math.min(minJump[j], minJump[i] + 1);
      }
    }
  }
  return minJump[minJump.length - 1];
};
// Runtime: 885 ms, among slowest 6%. 