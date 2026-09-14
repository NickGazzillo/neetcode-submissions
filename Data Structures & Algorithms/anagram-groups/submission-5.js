class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for (let i = 0; i < strs.length; i++){
            let x = strs[i].split("").sort().join();
            if (map.has(x)){
                map.get(x).push(strs[i]);
            }
            else{
                map.set(x, [strs[i]]);
            }
        }
        return Array.from(map.values())
    }
}
