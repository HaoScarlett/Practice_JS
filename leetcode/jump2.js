var canJump = function(nums){
    let length = nums.length;
    // Initialize the canReach table with false for all indices
    let canReach = Array(n).fill(false);
    
    // Iterate the nums to check every element's reachability
    for (let i = 0; i < nums.length; i++ ){
        if(nums[i]>=1){
            canReach[i]= true;
        }else{
            canReach[i]= false
        }
        if(canReach[length-1]=== false){
            return false
        }
    }
    return true;
};