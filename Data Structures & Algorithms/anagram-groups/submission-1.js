class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // input: str
        // output: str
        const countStr = (str) => {
            const count = new Array(26).fill(0); // a-z
            for (let char of str) {
                const index = 'z'.charCodeAt() - char.charCodeAt();
                count[index]++;
            }
            
            return count.join('#');
        }


        const counts = [];

        for (const str of strs) {
            counts.push(countStr(str));
        }

        // console.log(counts)

        const obj = counts.reduce((acc, val, index) => {
            const curVal = acc.get(val) ?? [];
            curVal.push(strs[index]);
            acc.set(val, curVal);
            return acc;
        }, new Map());

        const result = [];
        for (const x of obj.values()) {
            result.push(x);
        }

        return result;
    }
}
