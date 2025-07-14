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

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function countNodesC(root) {
    let [l, r] = [0, 0];
    let cur = root;
    while (cur) {
        l++;
        cur = cur.left;
    }
    cur = root;
    while (cur) {
        r++;
        cur = cur.right;
    }
    if (l == r) {
        return 2 ** l - 1;
    }
    return countNodesC(root.left) + countNodesC(root.right) + 1;
}

module.exports = {TreeNode, countNodes, countNodesA, countNodesB, countNodesC};
