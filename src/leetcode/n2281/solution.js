/**
 * @param {number[]} strength
 * @returns {number}
 */
function totalStrength(strength) {
    const n = strength.length;

    const left = Array.from({ length: n }, () => -1);
    const right = Array.from({ length: n }, () => n);

    const stk = [-1];
    for (let i = 0; i < n; i++) {
        while (stk.length > 1 && strength[stk.at(-1)] >= strength[i]) {
            right[stk.pop()] = i;
        }
        left[i] = stk.at(-1);
        stk.push(i);
    }

    let s = 0n;
    const ss = Array.from({ length: n + 2 }, () => 0n);
    for (let i = 1; i <= n; i++) {
        s += BigInt(strength[i - 1]);
        ss[i + 1] = ss[i] + s
    }

    let ans = 0n;
    for (let i = 0; i < n; i++) {
        const l = left[i] + 1, r = right[i] - 1;
        const total = BigInt(i - l + 1) * (ss[r + 2] - ss[i + 1]) - BigInt(r - i + 1) * (ss[i + 1] - ss[l]);
        ans += BigInt(strength[i]) * total;
    }

    return Number(ans % BigInt(10 ** 9 + 7));
}

module.exports = { totalStrength };
