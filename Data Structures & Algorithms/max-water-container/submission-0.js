class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        // for (let r=1; r<heights.length; r++) {
        //     for (let l=0; l<r; l++) {
        //         max = Math.max(
        //             max, 
        //             Math.min(heights[r], heights[l]) * (r-l)
        //         );
        //     }
        // }
        let l = 0, r = heights.length-1;
        while (l < r) {
            max = Math.max(
                max, 
                Math.min(heights[r], heights[l]) * (r-l)
            );

            if (heights[l] <= heights[r]) {
                l++;
                continue;
            }

            if (heights[l] > heights[r]) {
                r--;
                continue;
            }
            
        }
        return max;
    }
}
