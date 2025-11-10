const { zeroFilledSubarrayA, zeroFilledSubarrayB, zeroFilledSubarrayC, zeroFilledSubarrayD, zeroFilledSubarrayE } = require('../../../src/leetcode/n2348/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('2349. number of zero-filled subarray', () => {
        it.each([
            { nums: [1, 3, 0, 0, 2, 0, 0, 4], ans: 6 },
            { nums: [0, 0, 0, 2, 0, 0], ans: 9 },
            { nums: [2, 10, 2019], ans: 0 }
        ])(`${f.name}`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(zeroFilledSubarrayA);
register(zeroFilledSubarrayB);
register(zeroFilledSubarrayC);
register(zeroFilledSubarrayD);
register(zeroFilledSubarrayE);
