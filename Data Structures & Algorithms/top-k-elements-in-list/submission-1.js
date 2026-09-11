class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            if (!freq[num]) {
                freq[num] = 0;
            }

            freq[num]++;
        }

        const freqArr = Object.entries(freq);
        freqArr.sort((a, b) => b[1] - a[1]); // desc
        return freqArr.slice(0, k).map((val) => val[0]);
    }
}
