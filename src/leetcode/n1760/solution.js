/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @returns {number}
 */
function minimumSize(nums, maxOperations) {

    /**
     * @param {number} top
     * @returns {boolean}
     */
    function check(top) {
        let cnt = 0;
        for (const num of nums) {
            cnt += Math.ceil(num / top) - 1;
            if (cnt > maxOperations) {
                return false;
            }
        }
        return true;
    }

    let l = 1, r = Math.max(...nums);
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return l;
}

module.exports = minimumSize;
