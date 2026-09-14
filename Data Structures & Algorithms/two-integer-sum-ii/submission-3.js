class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++){
            if (numbers.indexOf(target - numbers[i]) === -1) {continue}
            else{
                return [i+1, numbers.indexOf(target - numbers[i])+1]
            }
        }
    }
}
