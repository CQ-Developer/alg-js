const { kthSmallest, kthSmallestA, kthSmallestB, kthSmallestC } = require('src/leetcode/n1439/solution');

const data = [
    { mat: [[1, 3, 11], [2, 4, 6]], k: 5, res: 7 },
    { mat: [[1, 3, 11], [2, 4, 6]], k: 9, res: 17 },
    { mat: [[1, 10, 10], [1, 4, 5], [2, 3, 6]], k: 7, res: 9 },
    { mat: [[1, 1, 10], [2, 2, 9]], k: 7, res: 12 }
];

const fun = test.each(data);

fun('kthSmallest($mat, $k)', ({ mat, k }) => {
    expect(() => kthSmallest(mat, k)).toThrow('skip');
});

fun('kthSmallestA($mat, $k)', ({ mat, k, res }) => {
    expect(kthSmallestA(mat, k)).toBe(res);
});

fun('kthSmallestB($mat, $k)', ({ mat, k, res }) => {
    expect(kthSmallestB(mat, k)).toBe(res);
});

fun('kthSmallestC($mat, $k)', ({ mat, k, res }) => {
    expect(kthSmallestC(mat, k)).toBe(res);
});
