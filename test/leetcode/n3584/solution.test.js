const {maximumProduct} = require('../../../src/leetcode/n3584/solution');

test.each([
    {nums:[-1,-9,2,3,-2,-3,1],m:1,result:81},
    {nums:[1,3,-5,5,6,-4],m:3,result:20},
    {nums:[2,-1,2,-6,5,2,-5,7],m:2,result:35}
])('maximumProduct($nums, $m)', ({nums,m,result}) => {
    expect(maximumProduct(nums,m)).toBe(result);
});
