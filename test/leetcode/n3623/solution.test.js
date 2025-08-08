const {countTrapezoids} = require('../../../src/leetcode/n3623/solution');

test.each([
    {points: [[1, 0], [2, 0], [3, 0], [2, 2], [3, 2]], result: 3},
    {points: [[0, 0], [1, 0], [0, 1], [2, 1]], result: 1}
])('countTrapezoids($points)', ({points, result}) => {
    expect(countTrapezoids(points)).toBe(result);
});
