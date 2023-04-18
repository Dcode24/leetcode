function containsDuplicate(nums) {
  // create a memory
  // Go through and see if what I see now is something i've seen before
  // if my number is never seen before, put it in memory
  // if the number does exist in memory, return true
  // [1,2,3,1]
  // time complexity: 0(n)
  // space complexity: 0(n)

  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "haha";
    } else {
      return true;
    }
  }
  return false;
}
