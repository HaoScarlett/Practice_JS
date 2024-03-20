// 205 isomorphism Transformation method

var isIsomorphic = function (s, t) {
  // for each char, replace it with the index of that char's first occurence
  // Using Map to track the key-value pairs

  // to avoid 1 10 and 11 0 case, use array to store the transformed digits

  function transArray(array) {
    const map = new Map();

    for (let i = 0; i < array.length; i++) {
      // if it's a new char
      if (!map.has(array[i])) {
        map.set(array[i], i);
      } else {
        // set the value of existing key as the first value
        const existingValue = map.get(array[i]);
        map.set(array[i], existingValue);
      }
    }
return map;
    // convert the values into an array
    // const transformedArray = [...map.values()];
  }
  const sTot = transArray(s);
  const tTos = transArray(t);

  const transformedS = [...sTot.values()];
  const transformedT = [...tTos.values()];

  // Compare two arrays for strict equality
//   function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
    return transformedS.every((ele, index) => ele === transformedT[index]);
//   }

//   return arraysEqual(transformedS, transformedT);
};
