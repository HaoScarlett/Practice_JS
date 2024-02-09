// 134. Gas Station

// If total gas at the end is non-negative, the current station is a valid solution.

var canCompleteCircuit = function (gas, cost) {
  // Edge case
  // gas.length === cost.length === 1

  let totalGas = gas.length; // The total amount of gas stations
  let totalGasInTank = 0;
  let totalCost = 0;
  let currentGasInTank = 0;
  let startingIndex = 0;

  // Iterate the gas array in the clockwise direction
  // Check every gas station while keep tracking total gas and cost for the current subarray.

  for (i = 0; i < totalGas; i++) {
    currentGasInTank += gas[i] - cost[i];
    totalGasInTank += gas[i] - cost[i];
    totalCost += cost[i];
    // Check the starting point
    // If at any point, the total gas becomes negative, reset the starting station to the next one.
    if (currentGasInTank < 0) {
      startingIndex = i + 1;
      currentGasInTank = 0;
    }
  }
  // If the total gas is not enough to complete the circuit, return -1.
  if (totalGasInTank < 0) {
    return -1;
  }

  // Check if it's possible to travel around the circuit
  return (startingIndex % totalGas);
};
