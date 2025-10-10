const { canSeePersonsCount } = require('../../../src/leetcode/n1944/solution');

test.each([
    { heights: [10, 6, 8, 5, 11, 9], result: [3, 1, 2, 1, 1, 0] },
    { heights: [5, 1, 2, 3, 10], result: [4, 1, 1, 1, 0] }
])('canSeePersonsCount($heights)', ({ heights, result }) => {
    expect(canSeePersonsCount(heights)).toEqual(result);
});
