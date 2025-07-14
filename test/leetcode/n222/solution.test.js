const { TreeNode, countNodes, countNodesA, countNodesB } = require('src/leetcode/n222/solution');

test.each([
    {
        root: new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)),
            new TreeNode(3,
                new TreeNode(6))),
        result: 6
    },
    {
        root: null,
        result: 0
    },
    {
        root: new TreeNode(1),
        result: 1
    }
])('countNodes($root)', ({ root, result }) => {
    expect(() => countNodes(root)).toThrow('skip');
    expect(countNodesA(root)).toBe(result);
    expect(countNodesB(root)).toBe(result);
});
