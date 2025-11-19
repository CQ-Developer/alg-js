const { maximumScore } = require('../../../src/leetcode/n2818/solution');

/**
 * @param {function(number[], number): number} f
 */
function register(f) {
    describe('2818. apply operations to maximize score', () => {
        it.each([
            { nums: [8, 3, 9, 3, 8], k: 2, ms: 81 },
            { nums: [19, 12, 14, 6, 10, 18], k: 3, ms: 4788 },
            { nums: [2, 1, 14, 5, 18, 1, 8, 5], k: 34, ms: 799392504 }
        ])(f.name, ({ nums, k, ms }) => {
            expect(f(nums, k)).toBe(ms);
        });
    });
}

register(maximumScore);
