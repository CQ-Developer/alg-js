const { maximumSumOfHeights } = require('../../../src/leetcode/n2866/solution');

test.each([
    { maxHeights: [5, 3, 4, 1, 1], res: 13 },
    { maxHeights: [6, 5, 3, 9, 2, 7], res: 22 },
    { maxHeights: [3, 2, 5, 5, 2, 3], res: 18 }
])('maximumSumOfHeights($maxHeights)', ({ maxHeights, res }) => {
    expect(maximumSumOfHeights(maxHeights)).toBe(res);
});
