/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 * Iterate through each number, make a decision
    check if my current number is BIG or should i take my previous accumulated number and use that
 * see if my accumulated number is bigger than my MaxValue, if so, replace it.
 * accumulated number = calc val
 */

function maxSubArray(nums) {
  if (nums.length === 1) return nums[0];
  // keep track of max value
  let maxValue = nums[0];
  // accumulated number
  let accNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], accNum + nums[i]);
    if (calc > maxValue) maxValue = calc;

    accNum = calc;
  }

  return maxValue;
}
