// 209_Min_Size_Subarray_Size

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // keep a running sum
    // adjust the slide window: contract the window if the sum >= target

    let minLength = 0;
    let sum = 0;
    let left = 0;
    // use a sliding window to represent the current subArray
    for (let right = 0; right < nums.length; right++) {
        sum = sum + nums[right];

        // if sum >= target
        sum = sum - nums[left];

    }
};