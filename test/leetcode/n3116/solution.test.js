const { findKthSmallest } = require('src/leetcode/n3116/solution');

const data = [
    { coins: [3, 6, 9], k: 3, ans: 9 },
    { coins: [5, 2], k: 7, ans: 12 },
    { coins: [5], k: 7, ans: 35 }
];

const f = test.each(data);

f('findKthSmallest($coins, $k)', ({ coins, k }) => {
    expect(() => findKthSmallest(coins, k)).toThrow('skip');
});
