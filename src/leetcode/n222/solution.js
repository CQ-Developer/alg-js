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

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function countNodesA(root) {
    if (root) {
        return countNodesA(root.left) + countNodesA(root.right) + 1;
    }
    return 0;
}

module.exports = { TreeNode, countNodes, countNodesA };
