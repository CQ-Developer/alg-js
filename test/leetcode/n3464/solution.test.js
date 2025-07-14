const { maxDistance, maxDistanceA } = require('../../../src/leetcode/n3464/solution');

const data = [
    { side: 2, points: [[0, 2], [2, 0], [2, 2], [0, 0]], k: 4, ans: 2 },
    { side: 1, points: [[0, 0], [1, 2], [2, 0], [2, 2], [2, 1]], k: 4, ans: 1 },
    { side: 2, points: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 0], [2, 2], [2, 1]], k: 5, ans: 1 }
];

const f = test.each(data);

f('maxDistance($side, $points, $k)', ({ side, points, k }) => {
    expect(() => maxDistance(side, points, k)).toThrow('skip');
});

f('maxDistanceA($side, $points, $k)', ({ side, points, k, ans }) => {
    expect(maxDistanceA(side, points, k)).toBe(ans);
});
