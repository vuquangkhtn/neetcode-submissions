class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const A_to_z = 'z'.charCodeAt() - 'A'.charCodeAt() + 1;
        const charIndex = (char) => {
            return char.charCodeAt() - 'A'.charCodeAt();
        }


        // time: O(52)
        const isValid = (arr, subArr) => {
            for (let i=0; i<A_to_z; i++) {
                if (subArr[i] > arr[i]) {
                    return false;
                }
            }

            return true;
        }

        if (t.length > s.length) return '';

        const tCount = new Array(A_to_z).fill(0);
        for (let i=0; i<t.length; i++) {
            tCount[charIndex(t[i])]++;
        }

        const sCount = new Array(A_to_z).fill(0);
        let l=0;
        let resL = -1, resR = -1, minLength = Number.MAX_SAFE_INTEGER;
        for (let r=0; r<s.length; r++) {
            sCount[charIndex(s[r])]++;

            if (!isValid(sCount, tCount)) {
                continue;
            }

            while (isValid(sCount, tCount) && l <= r) {
                if (r - l + 1 < minLength) {
                    resL = l;
                    resR = r;
                    minLength = Math.min(minLength, r - l + 1);
                }

                sCount[charIndex(s[l])]--;
                l++;
            }
        }
        // console.log(resL, resR);


        return resL === -1 || resR === -1 ? '' : s.substring(resL, resR+1);
    }
}
