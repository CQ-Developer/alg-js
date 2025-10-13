const { secondGreaterElementA, secondGreaterElementB } = require('../../../src/leetcode/n2454/solution');


const f = test.each([
    { nums: [2, 4, 0, 9, 6], res: [9, 6, 6, -1, -1] },
    { nums: [3, 3], res: [-1, -1] }
]);

f('secondGreaterElementA($nums)', ({ nums, res }) => {
    expect(secondGreaterElementA(nums)).toEqual(res);
});

f('secondGreaterElementB($nums)', ({ nums, res }) => {
    expect(secondGreaterElementB(nums)).toEqual(res);
});
