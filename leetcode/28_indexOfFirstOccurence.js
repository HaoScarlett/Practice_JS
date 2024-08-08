// 28_indexOfFirstOccurence

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let occIndexes = [];
    let needlePointer = 0;
    let haystackPointer = 0;
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    while (haystackPointer < haystackLength) {
        if (haystack[haystackPointer] !== needle[needlePointer]) {
            haystackPointer++;
            if (haystackPointer === haystackLength) {
                return -1;
            }
        }
        if (haystack[haystackPointer] === needle[needlePointer]) {
            occIndexes.push(haystackPointer);
            haystackPointer++;
            needlePointer++;
            if (needlePointer === needleLength) {
                return occIndexes[0];
            }
        }
        if (haystack[haystackPointer] !== needle[needlePointer] && needlePointer < needleLength) {
            return -1;
        }
    }
    return occIndexes[0];
};
