// 238_ Product Of Array Except Self

var productExceptSelf = function (nums) {
    // Initialize the result array 
    const result = new Array(nums.length).fill(1);
    // Compute the prefix value and store them in result arr
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }

    // Traverse the nums from right to left to compute the suffix value
    let suffix = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] = result[j] * suffix;
        suffix = suffix * nums[j];
    }
    return result;
}