const { countNonDecreasingSubarraysA, countNonDecreasingSubarraysB } = require('../../../src/leetcode/n3420/solution');


/**
 * @param {function(number[], number): number} f
 */
function testSolution(f) {
    describe('countNonDecreasingSubarrays', () => {
        it.each([
            { nums: [6, 3, 1, 2, 4, 4], k: 7, ans: 17 },
            { nums: [6, 3, 1, 3, 6],    k: 4, ans: 12 },
            { nums: [12, 3, 14, 18],    k: 1, ans: 7 }
        ])(`${f.name}($nums, $k)`, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}


testSolution(countNonDecreasingSubarraysA);
testSolution(countNonDecreasingSubarraysB);
