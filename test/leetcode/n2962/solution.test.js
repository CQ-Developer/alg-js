const { countSubarrays } = require('../../../src/leetcode/n2962/solution');

/**
 * @param {function(number[], number): number} f
 */
function register(f) {
    describe('2962. count subarrays where max element appears at least k times', () => {
        it.each([
            { nums: [1, 3, 2, 3, 3], k: 2, ans: 6 },
            { nums: [1, 4, 2, 1], k: 3, ans: 0 }
        ])(f.name, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}

register(countSubarrays);
