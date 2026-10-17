class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const OPEN = new Set(['{', '[', '(']);
        const BRACKETS_MAP = {
            '{': '}',
            '[': ']',
            '(': ')'
        }

        const stack = [];
        for (const char of s) {
            if (OPEN.has(char)) {
                stack.push(char);
                continue;
            }

            if (BRACKETS_MAP[stack.at(-1)] !== char) {
                return false;
            }

            stack.pop();
        }

        return stack.length === 0;
    }
}
