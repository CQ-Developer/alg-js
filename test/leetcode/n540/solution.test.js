const { singleNonDuplicate, singleNonDuplicateA, singleNonDuplicateB } = require('../../../src/leetcode/n540/solution');

const f = test.each([
    { nums: [1, 1, 2, 3, 3, 4, 4, 8, 8], result: 2 },
    { nums: [3, 3, 7, 7, 10, 11, 11], result: 10 }
]);

f('singleNonDuplicate($nums)', ({ nums }) => {
    expect(singleNonDuplicate(nums)).toBeUndefined();
});

f('singleNonDuplicateA($nums)', ({ nums, result }) => {
    expect(singleNonDuplicateA(nums)).toBe(result);
});

f('singleNonDuplicateB($nums)', ({ nums, result }) => {
    expect(singleNonDuplicateB(nums)).toBe(result);
});
