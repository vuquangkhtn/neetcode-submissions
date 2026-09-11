class Solution {
    /**
     * Output: length1 + str1 + length2+ str2 +...+lengthN + strN
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (const str of strs) {
            encoded = encoded + String(str.length).padStart(3, '0') + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let curLength = 0;
        let curStr = '';
        let i=0;
        const decoded = [];
        while (i <= str.length) { // i=length to push the last str
            if (curLength === 0) { // str[i] is str length
                if (i !== 0) { // reset
                    decoded.push(curStr);
                    curStr = '';
                }

                // get new length
                let temp = '';
                const tempLength = i+3;
                while (i<tempLength) {
                    temp += str[i];
                    i++;
                }
                curLength = Number(temp);
                continue;
            } 
            curStr += str[i];
            curLength--;
            i++;
        }

        return decoded;
    }
}


/**
 * 
 * 1. what if strs contain #?
 * 2. str + length
 */