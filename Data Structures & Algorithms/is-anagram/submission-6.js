class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {return false};
        const x = s.split("").sort();
        const y = t.split("").sort();
        for (let i = 0; i < s.length; i++){
            if (x[i] !== y[i]) {return false};
        }
        return true;
    }
}
