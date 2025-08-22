const { backspaceCompareA, backspaceCompareB } = require('../../../src/leetcode/n844/solution');

const fn = test.each([
    { s: 'ab#c', t: 'ad#c', result: true },
    { s: 'ab##', t: 'c#d#', result: true },
    { s: 'a#c', t: 'b', result: false }
]);

fn('backspaceCompareA($s, $t)', ({ s, t, result }) => {
    expect(backspaceCompareA(s, t)).toBe(result);
});

fn('backspaceCompareB($s, $t)', ({ s, t, result }) => {
    expect(backspaceCompareB(s, t)).toBe(result);
});
