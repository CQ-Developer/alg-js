const { myPow } = require('../../../src/leetcode/n50/solution');

/**
 * @param {function(number, number): number} f
 */
function register(f) {
    describe('50. Pow(x, n)', () => {
        it.each([
            { x: 2.0, n: 10, p: 1024.0 },
            { x: 2.1, n: 3, p: 9.261 },
            { x: 2.0, n: -2, p: 0.25 }
        ])(f.name, ({ x, n, p }) => {
            expect(f(x, n)).toBeCloseTo(p, 5);
        });
    });
}

register(myPow);
