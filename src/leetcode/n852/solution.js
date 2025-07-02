/**
 * @param {number[]} arr
 * @returns {number}
 */
function peakIndexInMountainArray(arr) {
    let [l, r] = [0, arr.length - 1];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (arr[i] > arr[i + 1]) {
            r = i;
        } else {
            l = i;
        }
    }
    return r;
}

module.exports = { peakIndexInMountainArray };
