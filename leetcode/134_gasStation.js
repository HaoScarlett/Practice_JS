// 134. Gas Station

// If total gas at the end is non-negative, the current station is a valid solution.

var canCompleteCircuit = function (gas, cost) {
  // Edge case
  // gas.length === cost.length === 1

//   let move = 0;
  let totalCost = 0;
  let totalGas = gas.length; // The total amount of gas stations
  //   Fill the tank in starting point
  let gasInTank = 0;

  // Iterate the gas array in the clockwise direction
  // Check every gas station while keep tracking total gas and cost for the current subarray.
  for (let i = 0; i <= totalGas; i++) {
    // if (gas[i] > totalCost) {
    gasInTank = gasInTank + gas[i];
    totalCost = totalCost + cost[i];
    gasInTank = gasInTank - totalCost;
    //   move++;
    // }
    // Check the starting point
    // If at any point, the total gas becomes negative, reset the starting station to the next one.
    if (gasInTank < 0) {
      // if the array has n elements and you are at index i,
      // the next index in the clockwise direction would be (i + 1) % n.
      i = (i + 1) % totalGas;
    } 
    if (i === totalGas) {
      gasInTank < 0 ? false : i;
    }
  }
};
