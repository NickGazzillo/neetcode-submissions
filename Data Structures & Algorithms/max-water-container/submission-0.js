class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let l = 0;
      let r = heights.length - 1;
      let max = 0;
      while (l < r){
        if(heights[l] < heights[r]){
          if(max < heights[l] * (r-l)){
            max = heights[l] * (r-l);
          }
          l++;
        }
        else{
            if(max < heights[r] * (r-l)){
            max = heights[r] * (r-l);
          }
          r--;
          }
      }
      return max;
    }
}
