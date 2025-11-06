const { trapA, trapB, trapC } = require('../../../src/leetcode/n42/solution');

/**
 * 
 * @param {function(number[]): number} f
 */
function register(f) {
    describe('42. Trapping Rain Water', () => {
        it.each([
            { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], ans: 6 },
            { height: [4, 2, 0, 3, 2, 5], ans: 9 }
        ])(`${f.name}($height)`, ({ height, ans }) => {
            expect(f(height)).toBe(ans);
        });
    });
}

register(trapA);
register(trapB);
register(trapC);
