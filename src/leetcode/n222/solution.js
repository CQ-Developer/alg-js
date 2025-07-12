class TreeNode {

    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

}

/**
 * @abstract
 * @param {TreeNode} root
 * @returns {number}
 */
function countNodes(root) {
    throw new Error('skip');
}

module.exports = { TreeNode, countNodes };
