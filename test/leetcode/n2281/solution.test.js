const { totalStrength } = require('../../../src/leetcode/n2281/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('2281. sum of total strength of wizards', () => {
        it.each([
            { strength: [1, 3, 1, 2], ans: 44 },
            { strength: [5, 4, 6], ans: 213 }
        ])(f.name, ({ strength, ans }) => {
            expect(f(strength)).toBe(ans);
        });
    });
}

register(totalStrength);
