const _ = require('lodash')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @returns {number[]}
 */
function maximumSumQueries(nums1, nums2, queries) {
    let j = 0;
    const pairs = _.zip(nums1, nums2).sort((a, b) => b[0] - a[0]);
    const qIdx = [...queries.keys()].sort((i, j) => queries[j][0] - queries[i][0]);
    const maxSum = Array.from({ length: queries.length }, () => -1);
    const stack = [];
    for (const i of qIdx) {
        const [x, y] = queries[i];
        for (; j < pairs.length && pairs[j][0] >= x; j++) {
            const [a, b] = pairs[j];
            while (stack.length && _.last(stack)[1] <= a + b) {
                stack.pop();
            }
            if (!stack.length || _.last(stack)[0] < b) {
                stack.push([b, a + b]);
            }
        }
        const p = _.sortedIndexBy(stack, [y,], (arr) => arr[0]);
        if (p < stack.length) {
            maxSum[i] = stack[p][1];
        }
    }
    return maxSum;
}

module.exports = { maximumSumQueries };
