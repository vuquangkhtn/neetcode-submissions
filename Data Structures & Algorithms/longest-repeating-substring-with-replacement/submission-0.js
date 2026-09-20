class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let max = 0;
        let maxf = 0;
        const freq = new Map();

        for (let r=0; r<s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
            maxf = Math.max(maxf, freq.get(s[r]));
            
            // console.log(maxf, r-l+1, r-l+1-maxf)
            while (r-l+1-maxf > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            
            max = Math.max(max, r-l+1);
        }

        return max;
    }
}
