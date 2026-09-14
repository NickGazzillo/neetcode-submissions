class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
  nums.sort((a, b) => a - b);     // numeric sort
  const output = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        output.push([nums[i], nums[l], nums[r]]);

        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) l++; // skip dup l
        while (l < r && nums[r] === nums[r + 1]) r--; // skip dup r
      }
    }
  }

  return output;
}
}
