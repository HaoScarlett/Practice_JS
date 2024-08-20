// 209_Min_Size_Subarray_Size

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // keep a running sum
    // adjust the slide window: contract the window if the sum >= target

    let minLength = Infinity;
    let sum = 0;
    let left = 0;
    // use a sliding window to represent the current subArray
    for (let right = 0; right < nums.length; right++) {
        sum = sum + nums[right];

        while (sum >= target) {
            // check the minLength
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left]
            left++;
        }
    }
    return minLength !== Infinity ? minLength : 0;
};
/* Time complexity: O(n)
   Space complexity: O(1)
*/