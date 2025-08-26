const { nextGreaterElementsA, nextGreaterElementsB } = require('../../../src/leetcode/n503/solution');

const f = test.each([
    { nums: [1, 2, 1], result: [2, -1, 2] },
    { nums: [1, 2, 3, 4, 3], result: [2, 3, 4, -1, 4] }
]);

f('nextGreaterElementsA($nums)', ({ nums, result }) => {
    expect(nextGreaterElementsA(nums)).toEqual(result);
});

f('nextGreaterElementsB($nums)', ({ nums, result }) => {
    expect(nextGreaterElementsB(nums)).toEqual(result);
});
