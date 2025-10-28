const { minSubarraySort } = require('../../../src/leetcode/n3555/solution');


/**
 * @param {function(number[], number): number[]} f
 */
function register(f) {
    describe('3555. Smallest Subarray to Sort in Every Sliding Window', () => {
        it.each([
            { nums: [1, 3, 2, 4, 5], k: 3, ans: [2, 2, 0] },
            { nums: [5, 4, 3, 2, 1], k: 4, ans: [4, 4] }
        ])(`${f.name}($nums, $k)`, ({ nums, k, ans }) => {
            expect(f(nums, k)).toEqual(ans);
        });
    });
}

register(minSubarraySort);
