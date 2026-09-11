class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        const countSet = new Set();

        for (const num of nums) {
            countSet.add(num);
        }

        const visited = new Set();
        for (const num of nums) {
            if (!countSet.has(num - 1) && !visited.has(num)) {
                visited.add(num);
                let length = 1;

                while (countSet.has(num + length)) {
                    length++;
                }

                maxLength = Math.max(maxLength, length);
            }
        }

        return maxLength;
    }
}
