class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let curMax = Number.MIN_SAFE_INTEGER;
        let count = new Map();
        let res = new Array();

        if (k === 1) return nums;

        for (let i=0; i<k; i++) {
            curMax = Math.max(curMax, nums[i]);
            count.set(nums[i], (count.get(nums[i]) ?? 0) + 1);
        }

        for (let l=0; l<=nums.length-k; l++) {
            const r = l + k - 1;
            // console.log(count)

            if (count.get(curMax) === 0) {
                curMax = Number.MIN_SAFE_INTEGER;
                for (let i=0; i<k; i++) {
                    curMax = Math.max(curMax, nums[l+i]);
                }
            } else {
                curMax = Math.max(curMax, nums[r]);
            }
            res.push(curMax);

            count.set(nums[l], count.get(nums[l]) - 1);
            count.set(nums[r+1], (count.get(nums[r+1]) ?? 0) + 1);
        }

        return res;
    }
}
