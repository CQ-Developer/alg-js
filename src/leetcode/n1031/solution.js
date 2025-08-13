/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @returns {number}
 */
function maxSumTwoNoOverlapA(nums, firstLen, secondLen) {
    const n = nums.length;
    const s = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + nums[i];
    }

    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function f(a, b) {
        let [res, max] = [0, 0];
        for (let i = a + b; i <= n; i++) {
            max = Math.max(max, s[i - a] - s[i - a - b]);
            res = Math.max(res, max + s[i] - s[i - a]);
        }
        return res;
    }

    return Math.max(f(firstLen, secondLen), f(secondLen, firstLen));
}

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @returns {number}
 */
function maxSumTwoNoOverlapB(nums, firstLen, secondLen) {
    const n = nums.length;
    const s = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + nums[i];
    }
    let [res, a, b] = [0, 0, 0];
    for (let i = firstLen + secondLen; i <= n; i++) {
        a = Math.max(a, s[i - firstLen] - s[i - firstLen - secondLen]);
        b = Math.max(b, s[i - secondLen] - s[i - firstLen - secondLen]);
        res = Math.max(res, a + s[i] - s[i - firstLen], b + s[i] - s[i - secondLen]);
    }
    return res;
}

module.exports = { maxSumTwoNoOverlapA, maxSumTwoNoOverlapB };
