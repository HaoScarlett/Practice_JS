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

// Examples
/* const result = [];
const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;
const start = performance.now();
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
  console.log(result);
}, maxT + 15); */
