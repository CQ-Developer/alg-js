/**
 * @class
 * @abstract
 */
class StockSpanner {

    constructor() {
        if (new.target == StockSpanner) {
            throw new Error('abstract');
        }
    }

    /**
     * @abstract
     * @param {number} price
     * @returns {number}
     */
    next(price) {
        throw new Error('abstract');
    }

}

/**
 * @class
 */
class StockSpannerA extends StockSpanner {

    constructor() {
        super();
        this.stack = [];
    }

    /**
     * @param {number} price
     * @returns {number}
     */
    next(price) {
        this.stack.push(price);
        let cnt = 0;
        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (price >= this.stack[i]) {
                cnt++;
            } else {
                break;
            }
        }
        return cnt;
    }

}

class StockSpannerB extends StockSpanner {

    constructor() {
        super();
        this.day = -1;
        this.stack = [[-1, Infinity]];
    }

    /**
     * @param {number} price
     * @returns {number}
     */
    next(price) {
        while (price >= this.stack[this.stack.length - 1][1]) {
            this.stack.pop();
        }
        this.day++;
        this.stack.push([this.day, price]);
        return this.day - this.stack[this.stack.length - 2][0];
    }

}
module.exports = { StockSpannerA, StockSpannerB };
