class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const zeroIndexes = nums.reduce((acc, val, index) => {
            if (val === 0) {
                acc.push(index);
            }

            return acc;
        }, []);

        if (zeroIndexes.length === 0) {
            const totalProduct = nums.reduce((acc, val) => acc*val, 1);
            const result = [];

            for (const num of nums) {
                result.push(totalProduct / num);
            }

            return result;
        }

        if (zeroIndexes.length === 1) {
            const result = new Array(nums.length).fill(0);
            result[zeroIndexes[0]] = nums.reduce((acc, val) => {
                if (val === 0) return acc;
                return acc*val;
            }, 1);
            return result;
        }

        return new Array(nums.length).fill(0);
    }
}
