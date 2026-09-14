class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str =s.replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase().split("");
        if (str.length === 0) {return true}
        for (let i = 0; i < str.length; i++){
            if(str[i] !== str[str.length-i-1]){return false};
            if(str.length-i -1 === 0 || str.length-i-1 === 1) {return true};
        }
    }
}
