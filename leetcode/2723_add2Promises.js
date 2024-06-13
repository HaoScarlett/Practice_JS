// 2723_add2Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  //   try {
  //     return (await promise1) + (await promise2);
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  try {
    const [res1, res2] = await Promise.all([promise1, promise2]);
    return res1 + res2;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
