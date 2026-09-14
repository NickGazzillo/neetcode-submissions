class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []; 
        const output = Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++){
            for (let j = stack.length - 1; j >= 0; j--){
                if(temperatures[i] > temperatures[stack[j]]){
                    output[stack[j]] = i - stack[j];
                    stack.pop();
                }
            }
            stack.push(i);
        }
        return output;
    }
}
