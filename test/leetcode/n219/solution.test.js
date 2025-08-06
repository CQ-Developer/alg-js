const {containsNearbyDuplicateA} = require('../../../src/leetcode/n219/solution');

const f = test.each([
    {nums: [1, 2, 3, 1], k: 3, result: true},
    {nums: [1, 0, 1, 1], k: 1, result: true},
    {nums: [1, 2, 3, 1, 2, 3], k: 2, result: false},
    {nums: [1], k: 1, result: false},
    {nums: [1, 2, 1], k: 0, result: false},
    {nums: [0, 1, 2, 3, 2, 5], k: 3, result: true}
]);

f('containsNearbyDuplicateA($nums, $k)', ({nums, k, result}) => {
    expect(containsNearbyDuplicateA(nums, k)).toBe(result);
});
