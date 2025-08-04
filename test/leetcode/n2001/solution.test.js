const { interchangeableRectangles } = require('../../../src/leetcode/n2001/solution');

const f = test.each([
    { rec: [[4, 8], [3, 6], [10, 20], [15, 30]], res: 6 },
    { rec: [[4, 5], [7, 8]], res: 0 }
]);

f('interchangeableRectangles($rec)', ({ rec, res }) => {
    expect(interchangeableRectangles(rec)).toBe(res);
});
