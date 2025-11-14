const { sumSubarrayMinsA, sumSubarrayMinsB, sumSubarrayMinsC } = require('../../../src/leetcode/n907/solution');

/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('907. Sum of Subarray Minimums', () => {
        it.each([
            { arr: [3, 1, 2, 4], sum: 17 },
            { arr: [11, 81, 94, 43, 3], sum: 444 },
            { arr: [71, 55, 82, 55], sum: 593 },
            { arr: [85], sum: 85 }
        ])(f.name, ({ arr, sum }) => {
            expect(f(arr)).toBe(sum);
        });
    });
}

register(sumSubarrayMinsA);
register(sumSubarrayMinsB);
register(sumSubarrayMinsC);
