//  202_happyNumber

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // split the number into its individual digits
    const digits = n.toString().split('').map(Number);
    // n = 19 digits = [1,9]
    // use pointer to keep track every digit, when computation is done, update the pointers

    // use hash map to keep track of each sum. If a repeated sum exists, it indicates the 
    // sequence has entered a cycle, return false. 
};