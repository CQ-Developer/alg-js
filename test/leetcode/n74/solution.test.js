const { searchMatrix } = require('../../../src/leetcode/n74/solution');

const data = [
    { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3, ans: true },
    { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 13, ans: false }
];

const f = test.each(data);

f('searchMatrix($matrix, $target)', ({ matrix, target, ans }) => {
    expect(searchMatrix(matrix, target)).toBe(ans);
});
