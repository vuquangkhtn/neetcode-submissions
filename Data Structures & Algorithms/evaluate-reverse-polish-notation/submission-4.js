class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const char of tokens) {
            // isOperator
            const num = Number(char);
            if (isNaN(num)) {
                const second = stack.pop();
                const first = stack.pop();

                let result;
                switch(char) {
                    case '+': 
                        result = first + second;
                        break;
                    case '-': 
                        result = first - second;
                        break;
                    case '*': 
                        result = first * second;
                        break;
                        
                    case '/': 
                        result = Math.trunc(first / second);
                        break;
                }

                stack.push(result);
                continue;
            }

            stack.push(num);
        }
        return stack.pop();
    }
}
