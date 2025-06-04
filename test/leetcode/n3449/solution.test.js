const { maxScore } = require('src/leetcode/n3449/solution');

const data = [
    { points: [2, 4], m: 3, ans: 4 },
    { points: [1, 2, 3], m: 5, ans: 2 }
];

const f = test.each(data);

f('maxScore($points, $m)', ({ points, m, ans }) => {
    expect(maxScore(points, m)).toBe(ans);
});