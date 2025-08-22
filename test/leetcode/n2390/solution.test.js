const { removeStarsA, removeStarsB } = require('../../../src/leetcode/n2390/solution');

const fn = test.each([
    { s: 'leet**cod*e', r: 'lecoe' },
    { s: 'erase*****', r: '' }
]);

fn('removeStarsA($s)', ({ s, r }) => {
    expect(removeStarsA(s)).toEqual(r);
});

fn('removeStarsB($s)', ({ s, r }) => {
    expect(removeStarsB(s)).toEqual(r);
});
