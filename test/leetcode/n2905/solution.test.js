const {findIndices} = require('../../../src/leetcode/n2905/solution');

test.each([
    {nums: [5, 1, 4, 1], indexDifference: 2, valueDifference: 4, result: [0, 3]},
    {nums: [2, 1], indexDifference: 0, valueDifference: 0, result: [0, 0]},
    {nums: [1, 2, 3], indexDifference: 2, valueDifference: 4, result: [-1, -1]}
])('findIndices($nums, $indexDifference, $valueDifference)', ({nums, indexDifference, valueDifference, result}) => {
    expect(findIndices(nums, indexDifference, valueDifference)).toEqual(result);
});
