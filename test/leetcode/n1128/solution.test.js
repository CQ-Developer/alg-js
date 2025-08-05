const {numEquivDominoPairs} = require('../../../src/leetcode/n1128/solution');

const f = test.each([
    {dominoes: [[1, 2], [2, 1], [3, 4], [5, 6]], result: 1},
    {dominoes: [[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]], result: 3}
]);

f('numEquivDominoPairs($dominoes)', ({dominoes, result}) => {
    expect(numEquivDominoPairs(dominoes)).toBe(result);
});
