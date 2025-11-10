const { numSubmatA, numSubmatB } = require('../../../src/leetcode/n1504/solution');

/**
 * @param {function(number[][]): number} f
 */
function register(f) {
    describe('1504. count submatrices with all ones', () => {
        it.each([
            { mat: [[1, 0, 1], [1, 1, 0], [1, 1, 0]], ans: 13 },
            { mat: [[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]], ans: 24 }
        ])(f.name, ({ mat, ans }) => {
            expect(f(mat)).toBe(ans);
        });
    });
}

register(numSubmatA);
register(numSubmatB);
