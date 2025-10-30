class Solution {

    constructor() {
        if (new.target === Solution) {
            throw new Error('abstract call.');
        }
    }

    /**
     * @abstract
     * @param {number[]} hours
     * @returns {number}
     */
    longestWPI(hours) {
        throw new Error('abstract call.');
    }

}

class SolutionA extends Solution {

    /**
     * @override
     * @param {number[]} hours
     * @returns {number}
     */
    longestWPI(hours) {
        const n = hours.length;
        const pre = Array.from({ length: n + 1 }, () => { return 0; });
        const stk = [0];
        for (let i = 1; i <= n; i++) {
            pre[i] = pre[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
            if (pre[i] < pre[stk[stk.length - 1]]) {
                stk.push(i);
            }
        }
        let ans = 0;
        for (let i = n; i > 0; i--) {
            while (stk.length && pre[i] > pre[stk[stk.length - 1]]) {
                ans = Math.max(ans, i - stk.pop());
            }
        }
        return ans;
    }

}

class SolutionB extends Solution {

    /**
     * @override
     * @param {number[]} hours
     * @returns {number}
     */
    longestWPI(hours) {
        const n = hours.length;
        const pos = Array.from({ length: n + 2 }, () => { return 0; });
        let ans = 0, s = 0;
        for (let i = 1; i <= n; i++) {
            s -= hours[i - 1] > 8 ? 1 : -1;
            if (s < 0) {
                ans = i;
            } else {
                if (pos[s + 1] > 0) {
                    ans = Math.max(ans, i - pos[s + 1]);
                }
                if (pos[s] == 0) {
                    pos[s] = i;
                }
            }
        }
        return ans;
    }

}

module.exports = { Solution, SolutionA, SolutionB };
