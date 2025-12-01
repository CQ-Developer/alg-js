import _ from 'lodash';

interface Solution {

    removeDuplicateLetters(s: string): string;

}

class SolutionA implements Solution {

    removeDuplicateLetters(s: string): string {
        const cnt = _.countBy(s);
        const st: string[] = [];
        const set = new Set<string>();
        for (const c of s) {
            cnt[c]--;
            if (set.has(c)) {
                continue;
            }
            while (st.length && c < st[st.length - 1] && cnt[st[st.length - 1]]) {
                set.delete(st.pop()!);
            }
            st.push(c);
            set.add(c);
        }
        return st.join('');
    }

}

export { Solution, SolutionA };
