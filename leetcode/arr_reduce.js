// 2626 - Array Reduce Transformation

var reduce = function (nums, fn, init) {
  // fn (accum, curr)
  let val = init;
//   Use '===' to compare tow sides
  if (nums === []) {
    return init;
  } else {
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
    return val;
  }
};
