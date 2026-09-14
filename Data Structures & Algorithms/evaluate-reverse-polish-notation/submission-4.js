class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if(tokens.length == 1)return tokens[0];
        let stack = [];
        const ops = {
            "+": (a,b) => parseInt(a) + parseInt(b),
            "-": (a,b) => parseInt(a) - parseInt(b),
            "*": (a,b) => parseInt(a) * parseInt(b),
            "/": (a,b) => Math.trunc(parseInt(a) / parseInt(b))
        }
        let output = 0;
        for (let i = 0; i < tokens.length; i++){
            if(tokens[i] in ops){
                let b = stack.pop();
                let a = stack.pop();
               output = ops[tokens[i]](a, b);
               stack.push(output);
            }
        else{
            stack.push(tokens[i]);
        }
        }
        return output;
    }
}
