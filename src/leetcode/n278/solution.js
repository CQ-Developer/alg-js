/**
 * @param {function(number):boolean} isBadVersion
 * @returns {function(number):number}
 */
function solution(isBadVersion) {
    return function (n) {
        let [l, r] = [1, n];
        while (l <= r) {
            const i = l + Math.floor((r - l) / 2);
            if (isBadVersion(i)) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
        return l;
    }
}

module.exports = { solution };
