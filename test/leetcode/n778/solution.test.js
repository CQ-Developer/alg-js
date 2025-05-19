const { swimInWaterA } = require('src/leetcode/n778/solution');

const data = [
    { grid: [[0, 2], [1, 3]], res: 3 },
    { grid: [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]], res: 16 },
    { grid: [[11, 15, 3, 2], [6, 4, 0, 13], [5, 8, 9, 10], [1, 14, 12, 7]], res: 11 }
];

const fn = test.each(data);

fn('swimInWater', ({ grid, res }) => {
    expect(swimInWaterA(grid)).toBe(res);
});
