const {Queue} = require('@datastructures-js/queue')

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

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function countNodesB(root) {
    if (root) {
        const q = new Queue();
        q.enqueue(root);
        let cnt = 0;
        while (!q.isEmpty()) {
            const node = q.dequeue();
            if (node.left) {
                q.enqueue(node.left);
            }
            if (node.right) {
                q.enqueue(node.right);
            }
            cnt++;
        }
        return cnt;
    }
    return 0;
}

module.exports = {TreeNode, countNodes, countNodesA, countNodesB};
