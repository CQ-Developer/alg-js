const { carFleetA, carFleetB } = require('../../../src/leetcode/n853/solution');

const f = test.each([
    { target: 12, position: [10, 8, 0, 5, 3], speed: [2, 4, 1, 1, 3], result: 3 },
    { target: 10, position: [3], speed: [3], result: 1 },
    { target: 100, position: [0, 2, 4], speed: [4, 2, 1], result: 1 }
]);

f('carFleetA($target, $position, $speed)', ({ target, position, speed, result }) => {
    expect(carFleetA(target, position, speed)).toBe(result);
});

f('carFleetB($target, $position, $speed)', ({ target, position, speed, result }) => {
    expect(carFleetB(target, position, speed)).toBe(result);
});
