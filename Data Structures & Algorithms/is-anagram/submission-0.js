class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const COUNT_LENGTH = 'z'.charCodeAt() - 'a'.charCodeAt() + 1;
        const countArr = new Array(COUNT_LENGTH).fill(0);

        if (s.length !== t.length) return false;

        for (let char of s) {
            const charIndex = 'z'.charCodeAt() - char.charCodeAt();
            countArr[charIndex]++;
        }

        for (let char of t) {
            const charIndex = 'z'.charCodeAt() - char.charCodeAt();
            countArr[charIndex]--;
        }

        for (let count of countArr) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
}
