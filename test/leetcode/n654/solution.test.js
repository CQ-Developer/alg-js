const { TreeNode, constructMaximumBinaryTreeA, constructMaximumBinaryTreeB } = require('../../../src/leetcode/n654/solution');

const f = test.each([
    {
        nums: [3, 2, 1, 6, 0, 5],
        result: new TreeNode(6, new TreeNode(3, null, new TreeNode(2, null, new TreeNode(1))), new TreeNode(5, new TreeNode(0)))
    },
    {
        nums: [3, 2, 1],
        result: new TreeNode(3, null, new TreeNode(2, null, new TreeNode(1)))
    }
]);

f('constructMaximumBinaryTreeA($nums)', ({ nums, result }) => {
    expect(constructMaximumBinaryTreeA(nums)).toEqual(result);
});

f('constructMaximumBinaryTreeB($nums)', ({ nums, result }) => {
    expect(constructMaximumBinaryTreeB(nums)).toEqual(result);
});
