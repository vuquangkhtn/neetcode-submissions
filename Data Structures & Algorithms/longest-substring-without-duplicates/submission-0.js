class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let maxLength = 0;

        const sSet = new Set();
        for (let i=0; i<s.length; i++) {
            const char = s[i];
            while (sSet.has(char) && start < i) {
                sSet.delete(s[start]);
                start++;
            }
            sSet.add(char);
            maxLength = Math.max(maxLength, i-start+1);
        }

        return maxLength;
    }
}
