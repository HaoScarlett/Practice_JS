// 2725_intervalCancellation
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// setInterval: it runs the fn regularly starting after the interval of time
var cancellable = function (fn, args, t) {
//   let timerId = setInterval(() => {
//     fn(...args);
//   }, t);
let timerId
  const cancelFn = () => {
    clearInterval(timerId);
  };
  return cancelFn;
};

/* Constraints:

fn is a function
args is a valid JSON array
1 <= args.length <= 10
30 <= t <= 100
10 <= cancelTimeMs <= 500 */
