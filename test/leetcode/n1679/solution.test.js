const {maxOperations} = require('../../../src/leetcode/n1679/solution');

test.each([
    {nums: [1, 2, 3, 4], k: 5, result: 2},
    {nums: [3, 1, 3, 4, 3], k: 6, result: 1},
    {nums: [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], k: 3, result: 4}
])('maxOperations($nums, $k)', ({nums, k, result}) => {
    expect(maxOperations(nums, k)).toBe(result);
});
