// 134. Gas Station

// If total gas at the end is non-negative, the current station is a valid solution.

var canCompleteCircuit = function (gas, cost) {
  // Edge case
  // gas.length === cost.length === 1

  let currentCost = [];
  let totalGas = gas.length; // The total amount of gas stations
  //  Store the total currentGasInTank for each starting point
  let currentGasInTank = [];
  let totalGasInTank = 0;
  let totalCost = 0;

  // Iterate the gas array in the clockwise direction
  // Check every gas station while keep tracking total gas and cost for the current subarray.
  let i;
  for (i = 0; i < totalGas; i++) {
    currentGasInTank[0] = gas[i];
    currentGasInTank[i+1] = currentGasInTank + gas[i+1];
    currentCost[i+1] = cost[i];
    totalGasInTank = currentGasInTank.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalCost = currentCost.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalGasInTank = totalGasInTank - totalCost;
    // Check the starting point
    // If at any point, the total gas becomes negative, reset the starting station to the next one.
    if (totalGasInTank < 0) {
      // if the array has n elements and you are at index i,
      // the next index in the clockwise direction would be (i + 1) % n.
      i = (i + 1) % totalGas;

      //  🟡 You should reset currentGasInTank and currentCost as you're starting a new subarray.
      currentGasInTank = [];
      currentCost = [];
    }
  }
  // if (currentGasInTank < 0) {
  //   return -1;
  // } else {
  return i;
  // }
};
