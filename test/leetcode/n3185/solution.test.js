const {countCompleteDayPairs} = require('../../../src/leetcode/n3185/solution');

test.each([
    {hours: [12, 12, 30, 24, 24], result: 2},
    {hours: [72, 48, 24, 3], result: 3}
])('countCompleteDayPairs', ({hours, result}) => {
    expect(countCompleteDayPairs(hours)).toBe(result);
});
