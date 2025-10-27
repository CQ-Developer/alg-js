const { binarySearchableNumbers } = require('../../../src/leetcode/n1966/solution');


/**
 * @param {function(number[]):number} f
 */
function register(f) {
    describe('binarySearchableNumbers', () => {
        it.each([
            { nums: [7], ans: 1 },
            { nums: [-1, 5, 2], ans: 1 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(binarySearchableNumbers);
