import { smallestSubsequence } from './solution.ts';

test.each([
    { s: 'bcabc', ans: 'abc' },
    { s: 'cbacdcbc', ans: 'acdb' }
])('smallestSubsequence($s)', ({ s, ans }) => expect(smallestSubsequence(s)).toBe(ans));
