const { maxWidthRamp } = require('../../../src/leetcode/n962/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('maximum width ramp', () => {
        it.each([
            { nums: [6, 0, 8, 2, 1, 5], ans: 4 },
            { nums: [9, 8, 1, 0, 1, 9, 4, 0, 4, 1], ans: 7 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(maxWidthRamp);
