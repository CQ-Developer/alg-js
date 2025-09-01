/**
 * @abstract
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function findKthPositive(arr, k) {
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function findKthPositiveA(arr, k) {
    let [num, n] = [1, arr.length];
    for (let i = 0; k > 0; num++) {
        if (i < n && arr[i] == num) {
            i++;
        } else {
            k--;
        }
    }
    return num - 1;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function findKthPositiveB(arr, k) {
    const n = arr.length;

    /**
     * @param {number} target
     * @returns {number}
     */
    function check(target) {
        let [l, r] = [-1, n];
        while (l + 1 < r) {
            const i = l + Math.floor((r - l) / 2);
            if (arr[i] >= target) {
                r = i;
            } else {
                l = i;
            }
        }
        return r;
    }

    let [l, r] = [0, arr[arr.length - 1] + k];
    while (l + 1 < r) {
        const num = l + Math.floor((r - l) / 2);
        if (num - check(num + 1) >= k) {
            r = num;
        } else {
            l = num;
        }
    }
    return r;
}

module.exports = {findKthPositive, findKthPositiveA, findKthPositiveB};
