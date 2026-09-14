class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        if (s.length % 2 !== 0){return false}
        for (let i = 0; i < s.length; i++){
            console.log(s[i])
            if(s[i] == '(' || s[i] == '{' || s[i] == '['){
                stack.push(s[i]);
            }
            else{
                if(stack[stack.length - 1] !== '(' && s[i] == ')' || 
                stack[stack.length - 1] !== '{' && s[i] == '}' ||
                stack[stack.length - 1] !== '[' && s[i] == ']'){
                    return false;
                }
                else{stack.pop()}
            }
        }
        if(stack.length !== 0){
            return false
        }
        return true;
    }
}
