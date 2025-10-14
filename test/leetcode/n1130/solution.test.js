const { mctFromLeafValuesA, mctFromLeafValuesB, mctFromLeafValuesC } = require('../../../src/leetcode/n1130/solution');

const f = test.each([
    { arr: [6, 2, 4], res: 32 },
    { arr: [4, 11], res: 44 }
]);

f('mctFromLeafValuesA($arr)', ({ arr, res }) => {
    expect(mctFromLeafValuesA(arr)).toBe(res);
});

f('mctFromLeafValuesB($arr)', ({ arr, res }) => {
    expect(mctFromLeafValuesB(arr)).toBe(res);
});

f('mctFromLeafValuesC($arr)', ({ arr, res }) => {
    expect(mctFromLeafValuesC(arr)).toBe(res);
});
