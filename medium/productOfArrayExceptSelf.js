/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * I: number[] - nums
 * 0: number[] - Product of all elements except for itself
 * C: - O(N), Cannot use division
 */

// nums = [1,2,3,4]
// leftProduct = [1,1,2,6]
// rightProduct = [24,12,4,1]
// solutionArray = [24, 12, 8, 6]
// A*B*C*D = ABCD

function productExceptSelf(nums) {
  let leftProduct = [];
  let rightProduct = [];
  let solution = [];

  // populate leftProduct
  for (let i = 0; i < nums.length; i++) {
    if (leftProduct.legnth === 0) {
      leftProduct.push(1);
    } else {
      leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
    }
  }
  // populate rightProduct
  for (let i = nums.legth - 1; i > -1; i++) {
    if (rightProduct.length === 0) {
      rightProduct.push(1);
    } else {
      rightProduct.unshift(rightProduct[0] * nums[i + 1]);
    }
  }
  // populate solution
  for (let i = 0; i < leftProduct.length; i++) {
    solution.push(leftProduct[i] * rightProduct[i]);
  }
  return solution;
}
