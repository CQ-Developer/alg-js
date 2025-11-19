const M = BigInt(10 ** 9 + 7);
const MX = 10 ** 5;

const omega = Array.from({ length: MX + 1 }, () => 0);
for (let i = 2; i <= MX; i++) {
    if (!omega[i]) {
        for (let j = i; j <= MX; j += i) {
            omega[j]++;
        }
    }
}

/**
 * @param {bigint} x
 * @param {bigint} n
 * @returns {bigint}
 */
function pow(x, n) {
    let p = 1n;
    while (n) {
        if ((n & 1n)) {
            p = p * x % M;
        }
        x = x * x % M;
        n >>= 1n;
    }
    return p;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function maximumScore(nums, k) {
    const n = nums.length;
    const left = Array.from({ length: n }, () => -1);
    const right = Array.from({ length: n }, () => n);
    const stack = [-1];
    for (let i = 0; i < n; i++) {
        while (stack.length > 1 && omega[nums[stack.at(-1)]] < omega[nums[i]]) {
            right[stack.pop()] = i;
        }
        left[i] = stack.at(-1);
        stack.push(i);
    }
    const idx = Array.from({ length: n }, (_, i) => i).sort((i, j) => nums[j] - nums[i]);
    let score = 1n, x = BigInt(k);
    for (const i of idx) {
        const s = BigInt(i - left[i]) * BigInt(right[i] - i);
        if (s >= x) {
            score = score * pow(BigInt(nums[i]), x) % M;
            break;
        }
        score = score * pow(BigInt(nums[i]), s) % M;
        x -= s;
    }
    return Number(score);
}

module.exports = { maximumScore };
