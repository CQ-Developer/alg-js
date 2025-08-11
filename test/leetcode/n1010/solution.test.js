const {numPairsDivisibleBy60} = require('../../../src/leetcode/n1010/solution');

test.each([
    {time: [30, 20, 150, 100, 40], result: 3},
    {time: [60, 60, 60], result: 3}
])('numPairsDivisibleBy60($time)', ({time, result}) => {
    expect(numPairsDivisibleBy60(time)).toBe(result);
});
