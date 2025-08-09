const { maxDistance } = require('../../../src/leetcode/n624/solution');

test.each([
    { arrays: [[1, 2, 3], [4, 5], [1, 2, 3]], result: 4 },
    { arrays: [[1], [1]], result: 0 }
])('maxDistance($arrays)', ({ arrays, result }) => {
    expect(maxDistance(arrays)).toBe(result);
});
