const { maximumLengthOfRangesA } = require('../../../src/leetcode/n2832/solution');


/**
 * @param {function(number[]): number[]} f
 */
function register(f) {
    describe('2832. Maximal Range That Each Element Is Maximum in It', () => {
        it.each([
            { nums: [1, 5, 4, 3, 6], ans: [1, 4, 2, 1, 5] },
            { nums: [1, 2, 3, 4, 5], ans: [1, 2, 3, 4, 5] }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(maximumLengthOfRangesA(nums)).toEqual(ans);
        });
    });
}

register(maximumLengthOfRangesA);
