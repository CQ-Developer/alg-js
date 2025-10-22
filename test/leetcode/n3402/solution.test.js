const { minimumOperations } = require('../../../src/leetcode/n3402/solution');

test.each([
    { grid: [[3, 2], [1, 3], [3, 4], [0, 1]], ans: 15 },
    { grid: [[3, 2, 1], [2, 1, 0], [1, 2, 3]], ans: 12 }
])('minimumOperations', ({ grid, ans }) => {
    expect(minimumOperations(grid)).toBe(ans);
});
