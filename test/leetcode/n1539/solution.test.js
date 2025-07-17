const { findKthPositive, findKthPositiveA } = require('../../../src/leetcode/n1539/solution');

const f = test.each([
    { arr: [2, 3, 4, 7, 11], k: 5, result: 9 },
    { arr: [1, 2, 3, 4], k: 2, result: 6 }
]);

f('findKthPositive($arr, $k)', ({ arr, k }) => {
    expect(findKthPositive(arr, k)).toBeUndefined();
});

f('findKthPositiveA($arr, $k)', ({ arr, k, result }) => {
    expect(findKthPositiveA(arr, k)).toBe(result);
});
