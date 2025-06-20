const { kthSmallestPrimeFraction } = require('src/leetcode/n786/solution');

const data = [
    { arr: [1, 2, 3, 5], k: 3, ans: [2, 5] },
    { arr: [1, 7], k: 1, ans: [1, 7] }
];

const f = test.each(data);

f('kthSmallestPrimeFraction($arr, $k)', ({ arr, k }) => {
    expect(() => kthSmallestPrimeFraction(arr, k)).toThrow('skip');
});
