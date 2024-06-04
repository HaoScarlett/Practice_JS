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
  //   console.log(pathSegments)

  // use a stack to store valid segments
  // push the valid directory names
  // pop the invalid '..' if the stack is not empty
  const stack = ["/"];
  for (const name of pathSegments) {
    if (name !== "" || name !== "." || name !== "..") {
      stack.push(name);
    }
    // pop 'a/..'
  }

  // rebuild the path
  return stack.join("/");
};

// simplifyPath("/a/./b/../../c/");
