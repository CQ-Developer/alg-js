const { numIdenticalPairsA } = require('../../../src/leetcode/n1512/solution');

const f = test.each([
    { nums: [1, 2, 3, 1, 1, 3], result: 4 },
    { nums: [1, 1, 1, 1], result: 6 },
    { nums: [1, 2, 3], result: 0 }
]);

f('numIdenticalPairs($nums)', ({ nums, result }) => {
    expect(numIdenticalPairsA(nums)).toBe(result);
});
