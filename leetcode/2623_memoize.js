// 2623. Memoize
// Let's build a helper machine
// Memoization only works correctly for pure functions
// Inputs are limited to 3 fns all with numeric inputs.
// Mind the memory, you could call the fn with dif inputs indefinitely.

// Check if the answer has already knew before call fns
// Keep track of how many times the same question has been asked

/*
For "call", perform the calculation
For "getCallCount", provide the num of times a specific fn has been called
 */

/* Implement Memoization 
- Use a data struct to store previously calculated results
- "Call": check it the result for the given input is in the memoization data struct, yes-return result
- no-calculate the result using the fn, store it in data struct, return the result
- "getCallCount", return the corresponding num of times
*/

/*
-"fnName", decide which fn to use
-Implement the logic for each fn
 */

/*
-Go through each action and perform required operation
-Keep track of the results and call counts for each fn
 */
// def memoization(actions,values)
function memoize(fn) {
    let memo = {};
    let call_counts = {
        "sum": 0,
        "fib": 0,
        "factorial":0
    }

    for(let i = 0; i < actions.length; i++){
        let action = actions[i];
        let fn_name = values[i];

        if(action === "call"){
            // checke memoization
            if(fn_name, values[i+1] in memo){
                result = memo[(fn_name, values[i+1])]
            }
            else{
                // call the fn and update memoization
                result = calculate_result(fn_name, values[i+1],memo);
                memo[(fn_name, values[i+1])] = result;
            }
            // Update call count
            call_counts[fn_name]+=1;

            // Skip the next value as it was the input for the 'call' 
            i+=1
        }
        else if (action === "getCallCount"){
            result = call_counts[fn_name];
        }
    }



  return function (...args) {};
}
