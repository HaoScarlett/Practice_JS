// 238_ Product Of Array Except Self

var productExceptSelf = function (nums) {
    // Initialize the result array 
    const result = [];
    // Compute the prefix value and store them in result arr
    let acc = 1;
    for (let i = 0; i < nums.length; i++) {
        acc = acc * nums[i];
        result.push(acc)
    }

    // Traverse the nums from right to left to compute the suffix value
    let currValue = 1;
    for (let j = nums.length - 1; j > 0; j--) {
        currValue = currValue * nums[j];
        // compute the final value
        if (j + 1 >= nums.length) {
            result[j] = result[j - 1]
        } else if (j === 0) {
            result[j] = currValue
        } else {
            result[j] = currValue * result[j - 1]
        }
    }
    return result;
}