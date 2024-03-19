// 205 isIsomorphic strings

var isIsomorphic = function (s, t) {
  // Convert two strings using hashmap
  function isMappingValid(s, t) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], t[i]);
      } else {
        if (map.get(s[i]) !== t[i]) {
          return false;
        }
      }
    }
    return true;
  }

  // Check if mapping from s to t and t to s are both valid
  return isMappingValid(s, t) && isMappingValid(t, s);
};
//   Convert t to s using hashmap
//   const tKeyMap = new Map();
//   for (let j = 0; j < t.length; j++) {
//     if (!tKeyMap.has(t[j])) {
//       tKeyMap.set(t[j], s[j]);
//     } else {
//       if (tKeyMap.get(t[j]) !== s[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// Time: iterate through each char in both strings separately, O(n), n = str.length;
// Space: two maps to store the mapping, O(n);
// It should work well for small to moderate-sized inputs.
// For very large inputs, the linear time complexity might become a bottleneck.
