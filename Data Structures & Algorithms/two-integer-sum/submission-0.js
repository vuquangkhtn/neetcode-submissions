class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = nums.reduce((acc, value, index) => {
            if (!acc[value]) {
                acc[value] = [];
            }
            acc[value].push(index);
            return acc;
        }, {});

        for (let val of nums) {
            const remain = target - val;

            if (val !== remain) {
                if (numMap[remain] !== undefined) {
                    return [numMap[val][0], numMap[remain][0]];
                }
            } else {
                if (numMap[val].length >= 2) {
                    return [numMap[val][0], numMap[val][1]];
                }
            }
        }

        // no satisfy pair
        return [];
    }
}
