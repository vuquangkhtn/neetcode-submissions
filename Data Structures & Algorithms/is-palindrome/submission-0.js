class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => {
            const regex = new RegExp('[A-za-z0-9]');
            
            return regex.test(char);
        }

        let left = 0, right = s.length - 1;
        while (left < right) {
            const lChar = s[left].toLowerCase();
            if (!isAlphanumeric(lChar)) {
                left++;
                continue;
            }

            const rChar = s[right].toLowerCase();
            if (!isAlphanumeric(rChar)) {
                right--;
                continue;
            }

            // console.log(lChar, rChar)
            if (lChar !== rChar) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
