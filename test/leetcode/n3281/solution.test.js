const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { maxPossibleScore } = require('src/leetcode/n3281/solution');

const data = [
    { start: [6, 0, 3], d: 2, result: 4 },
    { start: [2, 6, 13, 13], d: 2, result: 5 }
];

const f = test.each(data);

f('maxPossibleScore($start, $d)', ({ start, d }) => {
    expect(() => MaxPriorityQueue(start, d)).toThrow();
});
