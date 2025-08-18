const {
    countPairsA,
    countPairsB,
    countPairsC
} = require('../../../src/leetcode/n3267/solution');

const f = test.each([
    {
        nums: [1023, 2310, 2130, 213],
        result: 4
    },
    {
        nums: [1, 10, 100],
        result: 3
    }
]);

f('countPairsA($nums)', ({ nums, result }) => {
    expect(countPairsA(nums)).toBe(result);
});

f('countPairsB($nums)', ({ nums, result }) => {
    expect(countPairsB(nums)).toBe(result);
});

f('countPairsC($nums)', ({ nums, result }) => {
    expect(countPairsC(nums)).toBe(result);
});
