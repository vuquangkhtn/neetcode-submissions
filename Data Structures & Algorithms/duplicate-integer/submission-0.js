class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicated = {};

        for (let num of nums) {
            if (duplicated[num]) {
                return true;
            }

            duplicated[num] = true;
        }

        return false;
    }
}
