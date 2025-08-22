const { buildArray, buildArrayA, buildArrayB } = require('../../../src/leetcode/n1441/solution');

const fun = test.each([
    { target: [1, 3], n: 3, result: ['Push', 'Push', 'Pop', 'Push'] },
    { target: [1, 2, 3], n: 3, result: ['Push', 'Push', 'Push'] },
    { target: [1, 2], n: 4, result: ['Push', 'Push'] }
]);

fun('buildArray($target, $n)', ({ target, n }) => {
    expect(() => buildArray(target, n)).toThrow('skip');
});

fun('buildArrayA($target, $n)', ({ target, n, result }) => {
    expect(buildArrayA(target, n)).toEqual(result);
});

fun('buildArrayB($target, $n)', ({ target, n, result }) => {
    expect(buildArrayB(target, n)).toEqual(result);
});
