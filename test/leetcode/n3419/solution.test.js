const { minMaxWeightA } = require('../../../src/leetcode/n3419/solution')

const data = [
    { n: 5, edges: [[1, 0, 1], [2, 0, 2], [3, 0, 1], [4, 3, 1], [2, 1, 1]], threshold: 1, res: 1 },
    { n: 5, edges: [[0, 1, 1], [0, 2, 2], [0, 3, 1], [0, 4, 1], [1, 2, 1], [1, 4, 1]], threshold: 1, res: -1 },
    { n: 5, edges: [[1, 2, 1], [1, 3, 3], [1, 4, 5], [2, 3, 2], [3, 4, 2], [4, 0, 1]], threshold: 1, res: 2 },
    { n: 5, edges: [[1, 2, 1], [1, 3, 3], [1, 4, 5], [2, 3, 2], [4, 0, 1]], threshold: 1, res: -1 }
];

const fn = test.each(data);

fn('minMaxWeightA($n, $edges, $threshold)', ({ n, edges, threshold, res }) => expect(minMaxWeightA(n, edges, threshold)).toBe(res));
