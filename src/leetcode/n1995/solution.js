/**
 * @param {number[]} nums
 * @returns {number}
 */
function countQuadrupletsA(nums) {
    let [n, cnt] = [nums.length, 0];
    for (let d = 3; d < n; d++) {
        for (let c = 2; c < d; c++) {
            for (let b = 1; b < c; b++) {
                for (let a = 0; a < b; a++) {
                    if (nums[a] + nums[b] + nums[c] == nums[d]) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function countQuadrupletsB(nums) {
    let cnt = 0;
    const n = nums.length;
    const tab = Array(301).fill(0);
    for (let c = n - 2; c >= 2; c--) {
        tab[nums[c + 1]]++;
        for (let b = c - 1; b >= 1; b--) {
            for (let a = b - 1; a >= 0; a--) {
                cnt += tab[nums[a] + nums[b] + nums[c]];
            }
        }
    }
    return cnt;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function countQuadrupletsC(nums) {
    const n = nums.length;
    const tab = Array(301).fill(0);
    let cnt = 0;
    for (let b = n - 3; b >= 1; b--) {
        for (let d = b + 2; d < n; d++) {
            tab[nums[d] - nums[b + 1] + 100]++;
        }
        for (let a = b - 1; a >= 0; a--) {
            cnt += tab[nums[a] + nums[b] + 100];
        }
    }
    return cnt;
}

module.exports = { countQuadrupletsA, countQuadrupletsB, countQuadrupletsC };
