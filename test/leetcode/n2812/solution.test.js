const { maximumSafenessFactor, maximumSafenessFactorA, maximumSafenessFactorB } = require('../../../src/leetcode/n2812/solution');

const data = [
    { grid: [[1, 0, 0], [0, 0, 0], [0, 0, 1]], result: 0 },
    { grid: [[0, 0, 1], [0, 0, 0], [0, 0, 0]], result: 2 },
    { grid: [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0]], result: 2 }
];

const f = test.each(data);

f('maximumSafenessFactor($grid)', ({ grid }) => {
    expect(() => maximumSafenessFactor(grid)).toThrow();
});

f('maximumSafenessFactorA($grid)', ({ grid, result }) => {
    expect(maximumSafenessFactorA(grid)).toBe(result);
});

f('maximumSafenessFactorB($grid)', ({ grid, result }) => {
    expect(maximumSafenessFactorB(grid)).toBe(result);
});
