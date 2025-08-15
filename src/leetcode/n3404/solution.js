/**
 * @param {number[]} nums
 * @returns {number}
 */
function numberOfSubsequences(nums) {
    const n = nums.length;
    const tab = new Map();
    let cnt = 0;
    for (let i = 4; i < n - 2; i++) {
        const b = nums[i - 2];
        for (const a of nums.slice(0, i - 3)) {
            tab.set(a / b, (tab.get(a / b) ?? 0) + 1);
        }
        const c = nums[i];
        for (const d of nums.slice(i + 2)) {
            cnt += tab.get(d/ c) ?? 0;
        }
    }
    return cnt;
}

module.exports = { numberOfSubsequences };
