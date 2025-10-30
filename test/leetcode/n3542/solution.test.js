const { minOperations } = require('../../../src/leetcode/n3542/solution');


/**
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('3542. minimum operations to convert all elements to zero', () => {
        it.each([
            { nums: [0, 2], ans: 1 },
            { nums: [3, 1, 2, 1], ans: 3 },
            { nums: [1, 2, 1, 2, 1, 2], ans: 4 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(minOperations);
