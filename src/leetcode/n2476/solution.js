class TreeNode {

    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

}

/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @returns {number[][]}
 */
function closestNodes(root, queries) {
    const a = [];
    (function dfs(root) {
        if (root) {
            dfs(root.left);
            a.push(root.val);
            dfs(root.right);
        }
    })(root)
    const n = a.length;
    const res = []
    for (const x of queries) {
        let [l, r] = [-1, n];
        while (l + 1 < r) {
            const i = l + Math.floor((r - l) / 2);
            if (a[i] >= x) {
                r = i;
            } else {
                l = i;
            }
        }
        const max = r < n ? a[r] : -1;
        if (r == null || a[r] != x) {
            r--;
        }
        const min = r >= 0 ? a[r] : -1;
        res.push([min, max]);
    }
    return res;
}

module.exports = { TreeNode, closestNodes };
