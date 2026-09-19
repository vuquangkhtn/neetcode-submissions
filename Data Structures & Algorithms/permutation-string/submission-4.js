class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const isPermutation = (map1, map2) => {
            for (const [key, val] of map1) {
                if (map2.get(key) !== val) {
                    return false;
                } 
            }

            return true;
        }

        if (s1.length > s2.length) return false;

        const target = new Map();
        let currentCount = new Map();
        for (let i=0; i<s1.length; i++) {
            target.set(s1[i], (target.get(s1[i]) ?? 0) + 1);
            currentCount.set(s2[i], (currentCount.get(s2[i]) ?? 0) + 1);
        }

        let l = 0;
        while (l + s1.length <= s2.length) {
            // console.log(currentCount)
            if (isPermutation(target, currentCount)) {
                return true;
            }

            if (l + s1.length - 1 === s2.length) break;

            currentCount.set(s2[l], currentCount.get(s2[l]) - 1);
            
            l++;
            const r = l + s1.length - 1;
            currentCount.set(s2[r], (currentCount.get(s2[r]) ?? 0) + 1);

        }

        return false;
    }
}
