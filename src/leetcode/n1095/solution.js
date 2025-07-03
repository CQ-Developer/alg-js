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
    return -1;
}

module.exports = { MountainArray, findInMountainArray };
