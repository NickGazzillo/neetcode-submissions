class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++ ){
            let x = target - nums[i];
            if (nums.indexOf(x, i+1) === -1) {continue}
            else {
                return [i, nums.indexOf(x, i + 1)];
            }
        }
    }
}
