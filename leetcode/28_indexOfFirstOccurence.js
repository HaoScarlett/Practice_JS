// 28_indexOfFirstOccurence

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // iterate all the substring in haystack
    // open a window of size m, slide it over haystack
    // needle length is m, haystack length is n
    // for each substring, it starts at index (m-1) + 0, ends at index (m-1) + k, max at n - 1
    // so k = n - m

    let hayLength = haystack.length;
    let neeLegnth = needle.length;

    // open a window in haystack, the range of windowStart is n - m;
    for (let windowStart = 0; windowStart <= hayLength - neeLegnth; windowStart++) {
        // iterate the substring, the range is m
        for (let needlePointer = 0; needlePointer < neeLegnth; needlePointer++) {
            if (needle[needlePointer] !== haystack[windowStart + needlePointer]) {
                break;
            }
            // if chars in needle and sub-array in haystack are all equal
            // the needle pointer sucessfully reach the last char
            if (needlePointer === neeLegnth - 1) {
                return windowStart;
            }
        }
    }
    return - 1;
}
