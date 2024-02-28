// 12. Integer To Roman

/**
 * @param {number} num
 * @return {string}
 */


var intToRoman = function (num) {
    const romanNum = [];

    // Handle edge case: num = 0, no representation
    if (num === 0) {
        return romanNum;
    }
    // Create a mapping between integers and their corresponding Roman numeral symbols.
    const romanToInt_map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    // Look for the largest symbol that fits into map
    for (const key in romanToInt_map) {
        for (const i in romanToInt_map) {
            if (romanToInt_map[i] <= num) {
                romanNum.push(i);
                num = num - romanToInt_map[i];
            }
        }
    }
    return romanNum.join("");
};

