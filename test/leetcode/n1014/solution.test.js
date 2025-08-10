const { maxScoreSightseeingPair } = require('../../../src/leetcode/n1014/solution');

test.each([
    { values: [8, 1, 5, 2, 6], result: 11 },
    { values: [1, 2], result: 2 }
])('maxScoreSightseeingPair($values)', ({ values, result }) => {
    expect(maxScoreSightseeingPair(values)).toBe(result);
});
