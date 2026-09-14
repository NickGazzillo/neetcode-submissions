class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let n = heights.length;
        let r = n - 1;
        let output = 0;
        while(l < r){
            let min = Math.min(heights[l], heights[r]);
            let d = min * (r-l);
                if(output < d) output = d;
                if(heights[l] == min){
                    l++;
                }
                if(heights[r] == min){
                    r--;
                }
        }
        return output;
    }
}
