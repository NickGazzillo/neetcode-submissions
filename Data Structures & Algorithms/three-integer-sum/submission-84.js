class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //[-4,-1,-1,0,1,2]
        nums.sort((a,b) => a - b);
        let a = 0;
        const output = [];
        //if(nums[0] == nums[nums.length - 1] && nums[0] == 0){return [[0,0,0]]};
        while (a < nums.length - 1){
            if(nums[a] > 0){break};
            let l = a + 1;
            let r = nums.length - 1;
            while (l < r){
              if(nums[a] + nums[l] + nums[r] == 0){
                output.push([nums[a], nums[l], nums[r]]);
                l++;
                r--;

                while (l < r && nums[l] === nums[l-1]){l++};
                while (l < r && nums[r] === nums[r+1]){r--};
              }  
              else if (nums[a] + nums[l] + nums[r] > 0){
                r--;
              }
              else{
                l++;
              }
            }
            a++;
            while(nums[a] == nums[a-1]){
                a++;
            }
        }
        return output;
    }
}
