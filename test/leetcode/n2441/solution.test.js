const {findMaxK} = require('../../../src/leetcode/n2441/solution');

const f = test.each([
    {nums: [-1, 2, -3, 3], result: 1},
    {nums: [-1, 10, 6, 7, -7, 1], result: 7},
    {nums: [-10, 8, 6, 7, -2, -3], result: -1}
]);

f('findMaxK($nums)', ({nums}) => {
    expect(findMaxK(nums)).toBeUndefined();
});
