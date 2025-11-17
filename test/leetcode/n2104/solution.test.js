const { subArrayRangesA, subArrayRangesB } = require('../../../src/leetcode/n2104/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('2104. sum of subarray ranges', () => {
        it.each([
            { nums: [1, 2, 3], sum: 4 },
            { nums: [1, 3, 3], sum: 4 },
            { nums: [4, -2, -3, 4, 1], sum: 59 }
        ])(f.name, ({ nums, sum }) => {
            expect(f(nums)).toBe(sum);
        });
    });
}

register(subArrayRangesA);
register(subArrayRangesB);
