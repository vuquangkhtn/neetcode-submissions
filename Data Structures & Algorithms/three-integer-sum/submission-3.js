class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);

        const visited = new Set();
        const result = [];
        for (let t=2; t<nums.length; t++) {
            const target = nums[t] * -1;

            let l = 0, r = t-1;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum < target) {
                    l++;
                    continue;
                }

                if (sum > target) {
                    r--;
                    continue;
                }

                const arr = [nums[l], nums[r], nums[t]];
                const id = JSON.stringify(arr);
                if (!visited.has(id)) {
                    result.push(arr);
                    visited.add(id);
                }
                l++;
                r--;
            }
        }

        return result;
    }
}
