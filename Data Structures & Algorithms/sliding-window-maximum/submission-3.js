class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const st = new SegmentTree(nums);
        // st.print();
        const res = [];
        
        for (let l=0; l<=nums.length-k; l++) {
            const r = l + k - 1;

            res.push(st.search(l, r));
        }

        return res;
    }
}

class SegmentTree {
    st;
    n;

    constructor(arr) {
        this.n = arr.length;
        this.st = new Array(this.n * 4).fill(-Infinity);

        this.build(arr, 1, 0, this.n-1);
    }

    build(arr, i, l, r) {
        // console.log('i=', i, 'l=', l, 'r=', r)
        if (l === r) {
            this.st[i] = arr[l];
            return;
        }

        const mid = Math.floor((l+r) / 2);
        this.build(arr, i*2, l, mid);
        this.build(arr, i*2+1, mid + 1, r);

        this.st[i] = Math.max(this.st[i*2], this.st[i*2+1]);
    }

    search(ql, qr, i=1, l=0, r=this.n-1) {
        if (ql > r || qr < l) return -Infinity;

        if (ql <= l && qr >= r) return this.st[i]; 

        const m = (l+r) >> 1;

        return Math.max(
            this.search(ql, qr, i*2, l, m),
            this.search(ql, qr, i*2+1, m+1, r),
        )
    }

    print() {
        console.log(this.st);
    }
}