const { minCapabilityA } = require('src/leetcode/n2560/solution');

test.each([
    { nums: [2, 3, 5, 9], k: 2, expected: 5 },
    { nums: [2, 7, 9, 3, 1], k: 2, expected: 2 }
])('minCapability($nums, $k)', ({ nums, k, expected }) => {
    expect(minCapabilityA(nums, k)).toBe(expected);
});
