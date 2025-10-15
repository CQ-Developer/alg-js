const { mctFromLeafValuesA, mctFromLeafValuesB, mctFromLeafValuesC } = require('../../../src/leetcode/n1130/solution');

/**
 * @param {Function} f
 */
function testTemplate(f) {
    describe('n1130', () => {
        it(f.name, () => expect(f([6, 2, 4])).toBe(32));
        it(f.name, () => expect(f([4, 11])).toBe(44));
    });
}

testTemplate(mctFromLeafValuesA);
testTemplate(mctFromLeafValuesB);
testTemplate(mctFromLeafValuesC);
