/**
 * @abstract
 * @param {number[]} coins
 * @param {number} k
 * @returns {number}
 */
function findKthSmallest(coins, k) {
    throw new Error('skip');
}

/**
 * @param {number} x
 * @returns {number}
 */
function bitCount(x) {
    let cnt = 0;
    while (x) {
        x &= x - 1;
        cnt++;
    }
    return cnt;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
    return a * b / gcd(a, b);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}

/**
 * @param {number[]} coins
 * @param {number} k
 * @returns {number}
 */
function findKthSmallestA(coins, k) {
    const n = coins.length;

    /**
     * @param {number} x
     * @returns {number}
     */
    function check(x) {
        let cnt = 0;
        to: for (let s = 1; s < (1 << n); s++) {
            let y = 1;
            for (let i = 0; i < n; i++) {
                if (1 << i & s) {
                    y = lcm(coins[i], y);
                    if (y > x) {
                        continue to;
                    }
                }
            }
            cnt += bitCount(s) & 1 ? Math.floor(x / y) : -Math.floor(x / y);
        }
        return cnt;
    }

    let [l, r] = [k - 1, Math.min(...coins) * k];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid) >= k) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r;
}

/**
 * @param {number[]} coins
 * @param {number} k
 * @returns {number}
 */
function findKthSmallestB(coins, k) {
    coins.sort((a, b) => a - b);
    let n = 1;
    to: for (const x of coins) {
        for (const y of coins.slice(0, n)) {
            if (x % y == 0) {
                continue to;
            }
        }
        coins[n++] = x;
    }
    const subset = new Array(1 << n).fill(1);
    for (let i = 0; i < n; i++) {
        const status = 1 << i;
        for (let mask = 0; mask < status; mask++) {
            subset[status | mask] = lcm(subset[mask], coins[i]);
        }
    }

    /**
     * @param {number} x
     * @returns {number}
     */
    function check(x) {
        let cnt = 0;
        for (let s = 1; s < (1 << n); s++) {
            cnt += bitCount(s) & 1 ? Math.floor(x / subset[s]) : -Math.floor(x / subset[s]);
        }
        return cnt;
    }

    let [l, r] = [k - 1, k * Math.min(...coins)];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid) >= k) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r;
}

module.exports = { findKthSmallest, findKthSmallestA, findKthSmallestB };
