const { minMaxSubarraySumA, minMaxSubarraySumB, minMaxSubarraySumC } = require('../../../src/leetcode/n3430/solution');

/**
 * @param {function(number[], number): number} f
 */
function register(f) {
    describe('3430. maximum and minimum sums of at most size k subarrays', () => {
        it.each([
            { nums: [1, 2, 3], k: 2, ans: 20 },
            { nums: [1, -3, 1], k: 2, ans: -6 }
        ])(f.name, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}

register(minMaxSubarraySumA);
register(minMaxSubarraySumB);
register(minMaxSubarraySumC);
