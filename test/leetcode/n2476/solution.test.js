const { TreeNode, closestNodes } = require('../../../src/leetcode/n2476/solution');

const data = [
    { root: new TreeNode(6, new TreeNode(2, new TreeNode(1), new TreeNode(4)), new TreeNode(13, new TreeNode(9), new TreeNode(15, new TreeNode(14)))), queries: [2, 5, 16], ans: [[2, 2], [4, 6], [15, -1]] },
    { root: new TreeNode(4, null, new TreeNode(9)), queries: [3], ans: [[-1, 4]] }
];

const f = test.each(data);

f('closestNode($root, $queries)', ({ root, queries, ans }) => {
    expect(closestNodes(root, queries)).toEqual(ans);
});
