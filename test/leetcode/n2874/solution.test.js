const {maximumTripleValueA, maximumTripleValueB} = require('../../../src/leetcode/n2874/solution');

const f = test.each([
    {nums: [12, 6, 1, 2, 7], result: 77},
    {nums: [1, 10, 3, 4, 19], result: 133},
    {nums: [1, 2, 3], result: 0}
]);

f('maximumTripleValueA($nums)', ({nums, result}) => {
    expect(maximumTripleValueA(nums)).toBe(result);
});

f('maximumTripleValueB($nums)', ({nums, result}) => {
    expect(maximumTripleValueB(nums)).toBe(result);
});
