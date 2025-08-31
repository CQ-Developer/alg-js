class TreeNode {

    /**
     * @param {number} val
     * @param {TreeNode} left
     * @param {TreeNode} right
     */
    constructor(val, left, right) {
        this.val = val ? val : 0;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }

}

/**
 * @param {number[]} nums
 * @returns {TreeNode}
 */
function constructMaximumBinaryTreeA(nums) {
    const n = nums.length;

    /**
     * @param {number} l
     * @param {number} r
     * @returns {TreeNode}
     */
    function build(l, r) {
        if (l > r) {
            return null;
        }
        let i = l;
        for (let j = l; j <= r; j++) {
            if (nums[j] > nums[i]) {
                i = j;
            }
        }
        return new TreeNode(nums[i], build(l, i - 1), build(i + 1, r));
    }

    return build(0, n - 1);
}

/**
 * 
 * @param {number[]} nums
 * @returns {TreeNode}
 */
function constructMaximumBinaryTreeB(nums) {
    const n = nums.length;
    const nodes = Array(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        nodes[i] = new TreeNode(nums[i]);
        while (stack.length && nums[i] > nums[stack.at(-1)]) {
            nodes[i].left = nodes[stack.pop()];
        }
        if (stack.length) {
            nodes[stack.at(-1)].right = nodes[i];
        }
        stack.push(i);
    }
    return nodes[stack[0]];
}

module.exports = { TreeNode, constructMaximumBinaryTreeA, constructMaximumBinaryTreeB };
