const { validSubarraySize } = require('../../../src/leetcode/n2334/solution');

/**
 * @param {function(number[], number): number} f
 */
function register(f) {
    describe('2334. subarray with elements greater than varying threshold', () => {
        it.each([
            { nums: [1, 3, 4, 3, 1], threshold: 6, ans: [3] },
            { nums: [6, 5, 6, 5, 8], threshold: 7, ans: [1, 2, 3, 4, 5] }
        ])(f.name, ({ nums, threshold, ans }) => {
            expect(ans).toContain(f(nums, threshold));
        });
    });
}

register(validSubarraySize);
