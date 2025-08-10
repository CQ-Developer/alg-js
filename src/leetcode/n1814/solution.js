/**
 * @param {number[]} nums
 * @returns {number}
 */
function countNicePairs(nums) {
    let res = 0;
    const tab = new Map();
    for (const num of nums) {
        let [rev, x] = [0, num];
        while (x > 0) {
            rev *= 10;
            rev += x % 10;
            x = Math.trunc(x / 10);
        }
        const k = num - rev;
        const cnt = tab.get(k) ?? 0;
        res += cnt;
        tab.set(k, cnt + 1);
    }
    return res % 1000000007;
}

module.exports = { countNicePairs };
