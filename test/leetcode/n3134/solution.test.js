const { medianOfUniquenessArray, medianOfUniquenessArrayA } = require('src/leetcode/n3134/solution');

const data = [
    { nums: [1, 2, 3], ans: 1 },
    { nums: [3, 4, 3, 4, 5], ans: 2 },
    { nums: [4, 3, 5, 4], ans: 2 }
];

const f = test.each(data);

f('medianOfUniquenessArray($nums)', ({ nums }) => {
    expect(() => medianOfUniquenessArray(nums)).toThrow('skip');
});

f('medianOfUniquenessArrayA($nums)', ({ nums, ans }) => {
    expect(medianOfUniquenessArrayA(nums)).toBe(ans);
});
