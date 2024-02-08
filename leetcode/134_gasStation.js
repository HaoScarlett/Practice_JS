// 134. Gas Station

// If total gas at the end is non-negative, the current station is a valid solution.

var canCompleteCircuit = function (gas, cost) {
  // Edge case
  // gas.length === cost.length === 1

  let move = 0;
  let totalCost = 0;
  let totalGas = gas.length; // The total amount of gas stations
  //   Fill the tank in starting point
  let gasInTank = 0;
  // Iterate the gas array in the clockwise direction
  for (let i = 1; move < totalGas; i++) {
    // if (gasInTank - cost[i] < 0) {}
    if (gas[i] > cost[i]) {
      gasInTank = gasInTank + gas[i];
      totalCost = totalCost + cost[i - 1];
      move++;
      // Check every gas station while keep tracking total gas and cost for the current subarray.
      // If at any point, the total gas becomes negative, reset the starting station to the next one.
      if (gasInTank < totalCost) {
        // if the array has n elements and you are at index i,
        // the next index in the clockwise direction would be (i + 1) % n.
        i = (i + 1) % totalGas;
      }
    }
  }
};
