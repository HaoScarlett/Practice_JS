// 14_longestPrefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs === "") {
        return "";
    }
    let prefix = strs[0];
    const output = [];
    for (let strIndex = 0; strIndex < strs.length; strIndex++) {
        // if root node is different, then there's no common prefix
        if (strs[strIndex][charIndex] !== strs[strIndex + 1][charIndex]) {
            if (output.length === 0) {
                return "";
            } else {
                return output.join('');
            }
        } else {
            // if root nodes are the same, then move to the next root node
            if (strIndex < strs.length - 2) {
                continue; // stops statement execution and goes to the next iteration
            } else {
                output.push(strs[strIndex][charIndex]);
                strIndex = 0; // reset the pointer
                charIndex++;
            }

        }
    }
};

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Trie 