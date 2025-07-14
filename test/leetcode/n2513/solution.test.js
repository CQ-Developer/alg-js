const { minimizeSetA } = require('../../../src/leetcode/n2513/solution');

const data = [
    { d1: 2, d2: 7, u1: 1, u2: 3, res: 4 },
    { d1: 3, d2: 5, u1: 2, u2: 1, res: 3 },
    { d1: 2, d2: 4, u1: 8, u2: 2, res: 15 }
];

const f = test.each(data);

f('minizieSetA($d1, $d2, $u1, $u2)', ({ d1, d2, u1, u2, res }) => expect(minimizeSetA(d1, d2, u1, u2)).toBe(res));
