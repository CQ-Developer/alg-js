const { maximumSumQueries } = require('../../../src/leetcode/n2736/solution');

/**
 * @param {function(number[],number[],number[][]):number[]} f
 */
function testTemplate(f) {
    describe(f.name, () => {
        it.each([
            { nums1: [4, 3, 1, 2], nums2: [2, 4, 9, 5], queries: [[4, 1], [1, 3], [2, 5]], ans: [6, 10, 7] },
            { nums1: [3, 2, 5], nums2: [2, 3, 4], queries: [[4, 4], [3, 2], [1, 1]], ans: [9, 9, 9] },
            { nums1: [2, 1], nums2: [2, 3], queries: [[3, 3]], ans: [-1] }
        ])(`${f.name}($nums1, $nums2, $queries)`, ({ nums1, nums2, queries, ans }) => {
            expect(f(nums1, nums2, queries)).toEqual(ans);
        });
    });
}

testTemplate(maximumSumQueries);
