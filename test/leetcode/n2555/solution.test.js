const { maximizeWinA, maximizeWinB } = require('../../../src/leetcode/n2555/solution');

const f = test.each([
    { positions: [1, 1, 2, 2, 3, 3, 5], k: 2, result: 7 },
    { positions: [1, 2, 3, 4], k: 0, result: 2 }
]);

f('maximizeWinA($positions, $k)', ({ positions, k, result }) => {
    expect(maximizeWinA(positions, k)).toBe(result);
});

f('maximizeWinB($positions, $k)', ({ positions, k, result }) => {
    expect(maximizeWinB(positions, k)).toBe(result);
});
