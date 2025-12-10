import { smallestSubsequence } from './solution.ts';

test.each([
    { s: 'leet', k: 3, letter: 'e', repetition: 1, ans: 'eet' },
    { s: 'leetcode', k: 4, letter: 'e', repetition: 2, ans: 'ecde' },
    { s: 'bb', k: 2, letter: 'b', repetition: 2, ans: 'bb' }
])('smallestSubsequence($s, $k, $letter, $repetition)', ({ s, k, letter, repetition, ans }) => {
    expect(smallestSubsequence(s, k, letter, repetition)).toEqual(ans);
});
