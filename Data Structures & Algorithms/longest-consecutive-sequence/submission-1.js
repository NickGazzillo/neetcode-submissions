class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const test = nums.sort((a,b) => a-b);
        let run = 1;
        let largestRun = 1;
        if (nums.length === 0) {return 0};
        for (let i = 0; i < test.length; i++){
            if(test[i+1] - test[i] === 1){run += 1}
            else if (test[i+1] - test[i] === 0){continue}
            else {run = 1};
            if(largestRun < run){largestRun = run};
        }
        return largestRun;
    }    
}
