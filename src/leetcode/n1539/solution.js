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

module.exports = { findKthPositive, findKthPositiveA };
