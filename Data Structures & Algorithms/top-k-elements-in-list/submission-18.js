class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let buckets = Array.from({length: nums.length + 1}, () => []);
        let map = new Map();
        for (let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        for (const [val, c] of map){
            buckets[c].push(val);
        }

        let out = []
        for (let i = buckets.length - 1; i >= 1; i--){
            for(const val of buckets[i]){
            out.push(val);
            if(out.length === k) {return out};
        }
    }
}
}
