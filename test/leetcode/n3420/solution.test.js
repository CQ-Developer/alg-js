const { countNonDecreasingSubarraysA } = require('../../../src/leetcode/n3420/solution');


/**
 * @param {function(number[], number): number} f
 */
function testSolution(f) {
    describe('countNonDecreasingSubarrays', () => {
        it('testA', () => {
            expect(f([6, 3, 1, 2, 4, 4], 7)).toBe(17);
        });
        it('testB', () => {
            expect(f([6, 3, 1, 3, 6], 4)).toBe(12);
        });
    });
}

testSolution(countNonDecreasingSubarraysA);
