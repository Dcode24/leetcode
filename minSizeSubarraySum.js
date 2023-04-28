function minSubArrayLen(target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      result = Math.min(result, i - left + 1);
      sum -= nums[left++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
