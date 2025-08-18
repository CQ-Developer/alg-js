/**
 * @param {number[]} nums
 * @returns {number}
 */
function countPairsA(nums) {
    nums.sort((a, b) => a - b);
    const map = new Map();
    let cnt = 0;
    for (const x of nums) {
        const set = new Set([x]);
        const num = [...x.toString()];
        const n = num.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (num[i] == num[j]) {
                    continue;
                }
                [num[i], num[j]] = [num[j], num[i]];
                set.add(Number.parseInt(num.join('')));
                for (let k = i + 1; k < n - 1; k++) {
                    for (let l = k + 1; l < n; l++) {
                        if (num[k] == num[l]) {
                            continue;
                        }
                        [num[k], num[l]] = [num[l], num[k]];
                        set.add(Number.parseInt(num.join('')));
                        [num[k], num[l]] = [num[l], num[k]];
                    }
                }
                [num[i], num[j]] = [num[j], num[i]];
            }
        }
        for (const k of set) {
            cnt += map.get(k) ?? 0;
        }
        map.set(x, (map.get(x) ?? 0) + 1);
    }
    return cnt;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function countPairsB(nums) {
    nums.sort((a, b) => a - b);
    const p = [1, 10, 100, 1000, 10000, 100000, 1000000];
    const map = new Map();
    const set = new Set();
    let cnt = 0;
    const num = [0, 0, 0, 0, 0, 0, 0];
    for (const x of nums) {
        set.add(x);
        let n = 0;
        for (let v = x; v > 0; v = Math.trunc(v / 10)) {
            num[n++] = v % 10;
        }
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (num[i] == num[j]) {
                    continue;
                }
                const y = x + (num[j] - num[i]) * (p[i] - p[j]);
                set.add(y);
                [num[i], num[j]] = [num[j], num[i]];
                for (let k = i + 1; k < n - 1; k++) {
                    for (let l = k + 1; l < n; l++) {
                        if (num[k] == num[l]) {
                            continue;
                        }
                        const z = y + (num[k] - num[l]) * (p[l] - p[k]);
                        set.add(z);
                    }
                }
                [num[i], num[j]] = [num[j], num[i]];
            }
        }
        for (const k of set) {
            cnt += map.get(k) ?? 0;
        }
        set.clear();
        map.set(x, (map.get(x) ?? 0) + 1);
    }
    return cnt;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function countPairsC(nums) {
    /**
     * @param {number} x
     * @returns {number}
     */
    function bitCount(x) {
        let bit = 0;
        while (x) {
            x &= x - 1n;
            bit++;
        }
        return bit;
    }
    let res = 0;
    const pow = [1, 10, 100, 1000, 10000, 100000, 1000000];
    const bits = new Map();
    const n = Math.max(...nums).toString().length;
    for (let p = 0; p < nums.length; p++) {
        const set = new Set([nums[p]]);
        const a = [...nums[p].toString().padStart(n, '0')].reverse().map((v) => parseInt(v));
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (a[i] != a[j]) {
                    set.add(nums[p] + (a[j] - a[i]) * (pow[i] - pow[j]));
                }
            }
        }
        let idx = 0n;
        const bp = 1n << BigInt(p);
        for (const v of set) {
            const x = bits.get(v) ?? 0n;
            idx |= x;
            bits.set(v, x | bp);
        }
        res += bitCount(idx);
    }
    return res;
}

module.exports = { countPairsA, countPairsB, countPairsC };
