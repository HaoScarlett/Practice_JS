// 2715_Timeout2

// use a boolean flag to decide whether calling fn is allowed or not

var cancellable = function (fn, args, t) {
  let isCancelled = false;
  const timerId = setTimeout(function () {
    if (!isCancelled) fn(...args);
  }, t);
  return function () {
    isCancelled = true;
  };
};
