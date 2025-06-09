const { kthSmallest, kthSmallestA } = require('src/leetcode/n378/solution');

const data = [
    { matrix: [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k: 8, ans: 13 },
    { matrix: [[-5]], k: 1, ans: -5 }
];

const fun = test.each(data);

fun('kthSmallest($matrix, $k)', ({ matrix, k }) => {
    expect(() => kthSmallest(matrix, k)).toThrow('skip');
});

fun('kthSmallestA($matrix, $k)', ({ matrix, k, ans }) => {
    expect(kthSmallestA(matrix, k)).toBe(ans);
});
