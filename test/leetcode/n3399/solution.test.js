const { minLength, minLengthA } = require('src/leetcode/n3399/solution');

const data = [
    { s: '000001', numOps: 1, res: 2 },
    { s: '0000', numOps: 2, res: 1 },
    { s: '0101', numOps: 0, res: 1 }
];

const f = test.each(data);

f('minLength($s, $numOps)', ({ s, numOps }) => {
    expect(() => minLength(s, numOps)).toThrow('skip');
});

f('minLengthA($s, $numOps)', ({ s, numOps, res }) => {
    expect(minLengthA(s, numOps)).toBe(res);
});
