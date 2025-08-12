/**
 * @param {number[]} nums
 * @returns {number}
 */
function countBeautifulPairs(nums) {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function gcd(a, b) {
        while (b) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    let res = 0;
    const cnt = Array(10).fill(0);
    for (let x of nums) {
        for (let i = 1; i < 10; i++) {
            if (cnt[i] > 0 && gcd(i, x % 10) == 1) {
                res += cnt[i];
            }
        }
        while (x >= 10) {
            x = Math.trunc(x / 10);
        }
        cnt[x]++;
    }
    return res;
}

module.exports = {countBeautifulPairs};
