class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lGreaterEls = new Array(height.length);
        let rGreaterEls = new Array(height.length);
        
        for (let i=0; i<height.length; i++) {
            if (i === 0) {
                lGreaterEls[0] = 0;
                rGreaterEls[height.length-1] = 0;
                continue;
            }

            lGreaterEls[i] = Math.max(lGreaterEls[i-1], height[i-1]);
            rGreaterEls[height.length-1-i] = Math.max(rGreaterEls[height.length-1-i+1], height[height.length-1-i+1]);
        }

        // console.log(lGreaterEls)
        // console.log(rGreaterEls)

        let result = 0;
        for (let i=1; i<height.length-1; i++) {
            const minHeight = Math.min(lGreaterEls[i], rGreaterEls[i]) - height[i];
            result += minHeight > 0 ? minHeight : 0;
        }

        return result;
    }
}
