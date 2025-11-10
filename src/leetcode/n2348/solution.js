const { pick } = require("lodash");

/**
 * 动态规划
 * @param {number[]} nums
 * @returns {number}
 */
function zeroFilledSubarrayA(nums) {
    let ans = 0;
    const n = nums.length;
    const dp = Array(n);
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            dp[i] = 1;
            if (i > 0 && nums[i - 1] == 0) {
                dp[i] += dp[i - 1];
            }
            ans += dp[i];
        }
    }
    return ans;
}

/**
 * 空间压缩动态规划
 * @param {number[]} nums
 * @returns {number}
 */
function zeroFilledSubarrayB(nums) {
    let ans = 0;
    for (let p = 0, i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let c = 1;
            if (i > 0 && nums[i - 1] == 0) {
                c += p;
            }
            ans += c;
            p = c;
        }
    }
    return ans;
}

/**
 * 滑动窗口
 * p表示上一个非0数字的下标
 * @param {number[]} nums
 * @returns {number}
 */
function zeroFilledSubarrayC(nums) {
    let ans = 0;
    for (let p = -1, i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            ans += i - p;
        } else {
            p = i;
        }
    }
    return ans;
}

/**
 * 贡献法
 * p0表示之前连续0的数量
 * @param {number[]} nums
 * @returns {number}
 */
function zeroFilledSubarrayD(nums) {
    let ans = 0, p0 = 0;
    for (const x of nums) {
        p0 = x == 0 ? p0 + 1 : 0;
        ans += p0;
    }
    return ans;
}

/**
 * 双指针
 * @param {number[]} nums
 * @returns {number}
 */
function zeroFilledSubarrayE(nums) {
    let ans = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            let j = i++;
            while (i < n && nums[i] == 0) {
                i++;
            }
            const len = i - j;
            ans += len * (len + 1) / 2;
        }
    }
    return ans;
}

module.exports = { zeroFilledSubarrayA, zeroFilledSubarrayB, zeroFilledSubarrayC, zeroFilledSubarrayD, zeroFilledSubarrayE };
