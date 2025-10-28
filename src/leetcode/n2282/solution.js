/**
 * @param {number[][]} heights
 * @returns {number[][]}
 */
function seePeople(heights) {
    /**
     * @param {number[]} nums
     * @returns {number[]}
     */
    const f = (nums) => {
        const n = nums.length;
        const ans = Array.from({ length: n }, () => { return 0; });
        const stk = [];
        for (let i = n - 1; i > -1; i--) {
            const x = nums[i];
            while (stk.length && x > stk[stk.length - 1]) {
                stk.pop();
                ans[i]++;
            }
            if (stk.length) {
                ans[i]++;
            }
            while (stk.length && x == stk[stk.length - 1]) {
                stk.pop();
            }
            stk.push(x);
        }
        return ans;
    }
    const m = heights.length, n = heights[0].length;
    const ans = [];
    for (let i = 0; i < m; i++) {
        ans.push(f(heights[i]));
    }
    for (let j = 0; j < n; j++) {
        const nums = [];
        for (let i = 0; i < m; i++) {
            nums[i] = heights[i][j];
        }
        const cnt = f(nums);
        for (let i = 0; i < m; i++) {
            ans[i][j] += cnt[i];
        }
    }
    return ans;
}

module.exports = { seePeople };
