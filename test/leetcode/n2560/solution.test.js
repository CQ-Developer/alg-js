const { minCapabilityA, minCapabilityB } = require('../../../src/leetcode/n2560/solution');

const data = [
    { nums: [2, 3, 5, 9], k: 2, res: 5 },
    { nums: [2, 7, 9, 3, 1], k: 2, res: 2 }
];
const fn = test.each(data);
fn('minCapability($nums, $k)', ({ nums, k, res }) => {
    expect(minCapabilityA(nums, k)).toBe(res);
    expect(minCapabilityB(nums, k)).toBe(res);
});
