const { calPoints } = require('../../../src/leetcode/n682/solution');

const fn = test.each([
    { ops: ['5', '2', 'C', 'D', '+'], result: 30 },
    { ops: ['5', '-2', '4', 'C', 'D', '9', '+', '+'], result: 27 },
    { ops: ['1', 'C'], result: 0 }
]);

fn('calPoints($ops)', ({ ops, result }) => {
    expect(calPoints(ops)).toBe(result);
});
