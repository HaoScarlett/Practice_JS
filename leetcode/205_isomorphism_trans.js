// 205 isomorphism Transformation method

var isIsomorphic = function (s, t) {
  // for each char, replace it with the index of that char's first occurence
  // Using Map to track the key-value pairs

  // to avoid 1 10 and 11 0 case, use array to store the transformed digits

  function transArray(array) {
    const map = new Map();
    // 🔻 Instead of returning map, you should return
    // transformedArray containing the transformed values
    const transformedArray = [];

    for (let i = 0; i < array.length; i++) {
      // if it's a new char
      if (!map.has(array[i])) {
        map.set(array[i], i);
        transformedArray.push(i);
      } else {
        // set the value of existing key as the first value
        // const existingValue = map.get(array[i]);
        // map.set(array[i], existingValue);
        transformedArray.push(map.get(array[i]));
      }
    }
    return transformedArray;
    // convert the values into an array
    // const transformedArray = [...map.values()];
  }

  const transformedS = transArray(s);
  const transformedT = transArray(t);

  return transformedS.every((ele, index) => ele === transformedT[index]);

};

//  Time: O(n), n is the length of the strings. 
//  Space: two maps, O(n).