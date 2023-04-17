/**
 * 
 * Brute Force Approach
 * 
 * function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return[i, j]
            }
        }
    }
}
 * 
 * Time complexity: 0(n^2)
 * Space complexity 0(1)
 * 
 * 
 */

/**
 * Optimized using dictionary {}
 *
 *
 *
 */
function twoSum(nums, target) {
  let memory = {};

  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[target - nums[i]] = i;
    } else {
      return [memory[nums[i]], i];
    }
  }
}

// Space 0(n)
// Time 0(n)
