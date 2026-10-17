class MinStack {
    arr;

    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minVal = Math.min(this.getMin(), val);
        this.arr.push([val, minVal]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.arr.at(-1);
        return top !== undefined ? this.arr.at(-1)[0] : NaN;
    }

    /**
     * @return {number}
     */
    getMin() {
        const top = this.arr.at(-1);
        return top !== undefined ? this.arr.at(-1)[1] : Number
        .MAX_SAFE_INTEGER;
    }
}
