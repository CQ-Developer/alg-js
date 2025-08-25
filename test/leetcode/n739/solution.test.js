const { dailyTemperatures } = require('../../../src/leetcode/n739/solution');

test.each([
    { t: [73, 74, 75, 71, 69, 72, 76, 73], r: [1, 1, 4, 2, 1, 1, 0, 0] },
    { t: [30, 40, 50, 60], r: [1, 1, 1, 0] },
    { t: [30, 60, 90], r: [1, 1, 0] }
])('dailyTemperatures($t)', ({ t, r }) => {
    expect(dailyTemperatures(t)).toEqual(r);
});
