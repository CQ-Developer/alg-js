const { maxSumTwoNoOverlapA, maxSumTwoNoOverlapB } = require('../../../src/leetcode/n1031/solution');

const f = test.each([
    { nums: [0, 6, 5, 2, 2, 5, 1, 9, 4],    firstLen: 1, secondLen: 2, result: 20 },
    { nums: [3, 8, 1, 3, 2, 1, 8, 9, 0],    firstLen: 3, secondLen: 2, result: 29 },
    { nums: [2, 1, 5, 6, 0, 9, 5, 0, 3, 8], firstLen: 4, secondLen: 3, result: 31 }
]);

f('maxSumTwoNoOverlapA($nums, $firstLen, $secondLen)', ({ nums, firstLen, secondLen, result }) => {
    expect(maxSumTwoNoOverlapA(nums, firstLen, secondLen)).toBe(result);
});

f('maxSumTwoNoOverlapB($nums, $firstLen, $secondLen)', ({ nums, firstLen, secondLen, result }) => {
    expect(maxSumTwoNoOverlapB(nums, firstLen, secondLen)).toBe(result);
});
