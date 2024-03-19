// 205 isIsomorphic strings

var isIsomorphic = function (s, t) {
  // Convert s to t using hashmap
  const sKeyMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sKeyMap.has(s[i])) {
      sKeyMap.set(s[i], t[i]);
    } else {
      if (sKeyMap.get(s[i]) !== t[i]) {
        return false;
      }
    }
  }

  //   Convert t to s using hashmap
  const tKeyMap = new Map();
  for (let j = 0; j < t.length; j++) {
    if (!tKeyMap.has(t[j])) {
      tKeyMap.set(t[j], s[j]);
    } else {
      if (tKeyMap.get(t[j]) !== s[j]) {
        return false;
      }
    }
  }
  return true;
};
