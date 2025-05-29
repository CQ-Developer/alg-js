const { maxPower, maxPowerA } = require('src/leetcode/n2528/solution');

const data = [
    { stations: [1, 2, 4, 5, 0], r: 1, k: 2, result: 5 },
    { stations: [4, 4, 4, 4], r: 0, k: 3, result: 4 }
];

const f = test.each(data);

f('maxPower($stations, $r, $k)', ({ stations, r, k }) => {
    expect(() => maxPower(stations, r, k)).toThrow('skip');
});

f('maxPowerA($stations, $r, $k)', ({ stations, r, k, result }) => {
    expect(maxPowerA(stations, r, k)).toBe(result);
});
