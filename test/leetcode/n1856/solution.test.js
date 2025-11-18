const { maxSumMinProduct } = require('../../../src/leetcode/n1856/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('1856. maximum subarray min product', () => {
        it.each([
            { nums: [1, 2, 3, 2], max: 14 },
            { nums: [2, 3, 3, 1, 2], max: 18 },
            { nums: [3, 1, 5, 6, 4, 2], max: 60 }
        ])(f.name, ({ nums, max }) => {
            expect(f(nums)).toBe(max);
        });
    });
}

register(maxSumMinProduct);
