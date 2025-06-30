const { mySqrt } = require('src/leetcode/n69/solution');

const data = [
    { x: 4, y: 2 },
    { x: 8, y: 2 }
];

const f = test.each(data);

f('mySqrt($x)', ({ x, y }) => {
    expect(mySqrt(x)).toBe(y);
});
