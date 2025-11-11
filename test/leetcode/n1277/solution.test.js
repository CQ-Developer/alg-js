const { countSquaresA, countSquaresB, countSquaresC, countSquaresD } = require('../../../src/leetcode/n1277/solution');

/**
 * 
 * @param {function(number[][]): number} f
 */
function register(f) {
    describe('1277.count square submatrices with all ones', () => {
        it.each([
            { matrix: [[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]], cnt: 15 },
            { matrix: [[1, 0, 1], [1, 1, 0], [1, 1, 0]], cnt: 7 }
        ])(`${f.name}`, ({ matrix, cnt }) => {
            expect(f(matrix)).toBe(cnt);
        });
    });
}

register(countSquaresA);
register(countSquaresB);
register(countSquaresC);
register(countSquaresD);
