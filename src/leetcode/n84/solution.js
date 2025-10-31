class Solution {

    constructor() {
        if (new.target === Solution) {
            throw new Error('abstract call');
        }
    }

    /**
     * @abstract
     * @param {number[]} heights
     * @returns {number}
     */
    largestRectangleArea(heights) {
        throw new Error('abstract call');
    }

}

class SolutionA extends Solution {

    /**
     * @override
     * @param {number[]} heights 
     * @returns {number}
     */
    largestRectangleArea(heights) {
        let stk = [];
        const n = heights.length;
        const left = Array.from({ length: n }, () => { return -1; });
        for (let i = 0; i < n; i++) {
            while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
                stk.pop();
            }
            if (stk.length) {
                left[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        stk = [];
        const right = Array.from({ length: n }, () => { return n; });
        for (let i = n - 1; i > -1; i--) {
            while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
                stk.pop();
            }
            if (stk.length) {
                right[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        let mx = 0;
        for (let i = 0; i < n; i++) {
            mx = Math.max(mx, heights[i] * (right[i] - left[i] - 1));
        }
        return mx;
    }

}

class SolutionB extends Solution {

    /**
     * @override
     * @param {number[]} heights 
     * @returns {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const stk = [];
        const left = Array.from({ length: n }, () => { return -1; });
        const right = Array.from({ length: n }, () => { return n; });
        for (let i = 0; i < n; i++) {
            while (stk.length && heights[stk[stk.length - 1]] >= heights[i]) {
                right[stk.pop()] = i;
            }
            if (stk.length) {
                left[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        let mx = 0;
        for (let i = 0; i < n; i++) {
            mx = Math.max(mx, heights[i] * (right[i] - left[i] - 1));
        }
        return mx;
    }

}

class SolutionC extends Solution {

    /**
     * @override
     * @param {number[]} heights 
     * @returns {number}
     */
    largestRectangleArea(heights) {
        heights.push(-1);
        const stk = [-1];
        let mx = 0;
        for (let r = 0; r < heights.length; r++) {
            while (stk.length && heights[r] <= heights[stk[stk.length - 1]]) {
                const h = heights[stk.pop()];
                mx = Math.max(mx, h * (r - stk[stk.length - 1] - 1));
            }
            stk.push(r);
        }
        return mx;
    }

}

module.exports = { Solution, SolutionA, SolutionB, SolutionC };
