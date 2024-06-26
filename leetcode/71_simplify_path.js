// 71_simplify_path

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // spllit the input path using '/' as a delimiter
  // s = '/a/./b/../../c/' s.split('/') => ["", "a", ".", "b", "..", "..", "c", ""]
  // '.' represent the current path, ignore
  // '..' if there's a previous segment, remove it. if it's at root, igore it
  // '...' 'a' are valid directory names
  const pathSegments = path.split("/");

  // use a stack to store valid segments
  // push the valid directory names
  // pop the invalid '..' if the stack is not empty
  const stack = [];
  let i = 0;
  while (i < pathSegments.length) {
    if (pathSegments[i] === "" || pathSegments[i] === ".") {
      i++;
    } else if (pathSegments[i] === "..") {
      if (stack.length >= 1) {
        stack.pop();
        i++;
      } else {
        i++;
      }
    } else {
      stack.push(pathSegments[i]);
      i++;
    }
  }
  // rebuild the path
  return "/".concat(stack.join("/"));
};

// continue statement