const {similarPairs} = require('../../../src/leetcode/n2506/solution');

test.each([
    {words: ["aba", "aabb", "abcd", "bac", "aabc"], result: 2},
    {words: ["aabb", "ab", "ba"], result: 3},
    {words: ["nba", "cba", "dba"], result: 0}
])('similarPairs($words', ({words, result}) => {
    expect(similarPairs(words)).toBe(result);
});
