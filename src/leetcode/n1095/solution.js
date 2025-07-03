class MountainArray {

    /**
     * @abstract
     * @param {number} index
     * @returns {number}
     */
    get(index) {
        throw new Error('unimplemented');
    }

    /**
     * @abstract
     * @returns {number}
     */
    length() {
        throw new Error("unimplemented");
    }

}

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @returns {number}
 */
function findInMountainArray(target, mountainArr) {
    /**
     * @param {number} x
     * @param {number} l
     * @param {number} r
     * @param {boolean} f
     * @returns {number}
     */
    function search(x, l, r, f) {
        while (l <= r) {
            const i = l + Math.floor((r - l) / 2);
            let e = mountainArr.get(i);
            if (f) {
                e = -e;
            }
            if (e == x) {
                return i;
            }
            if (e > x) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
        return -1;
    }

    const n = mountainArr.length();
    let [l, r] = [0, n - 2];
    while (l < r) {
        const i = l + Math.floor((r - l) / 2);
        if (mountainArr.get(i) < mountainArr.get(i + 1)) {
            l = i + 1;
        } else {
            r = i;
        }
    }
    let i = search(target, 0, r, false);
    if (i == -1) {
        i = search(-target, r + 1, n - 1, true);
    }
    return i;
}

module.exports = { MountainArray, findInMountainArray };
