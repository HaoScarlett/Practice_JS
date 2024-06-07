// 71_simplify_path2

var simplifyPath = function (path) {
  const pathSegments = path.split("/");
  let stack = [];

  for (const dir of pathSegments) {
    if (dir === "" || dir === ".") {
      continue;
    } else if (dir === "..") {
      if (stack.length !== 0) {
        stack.pop();
        continue;
      } else {
        continue;
      }
    } else {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");
};
