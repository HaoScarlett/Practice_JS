// 2725_intervalCancellation
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// setInterval: it runs the fn regularly starting after the interval of time
var cancellable = function (fn, args, t) {
  let firstTimerId = setTimeout(() => {
    fn(...args);
  }, 0);
  let timerId = setInterval(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearTimeout(firstTimerId);
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

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */