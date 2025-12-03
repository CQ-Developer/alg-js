import _ from 'lodash';

function smallestSubsequence(s: string): string {
    const re = _.countBy(s);
    const en = new Set<string>();
    const st = new Array<string>();
    for (const x of s) {
        re[x]--;
        if (en.has(x)) {
            continue;
        }
        while (st.length && x < st.at(-1)! && re[st.at(-1)!] > 0) {
            en.delete(st.pop()!);
        }
        st.push(x);
        en.add(x);
    }
    return st.join('');
}

export { smallestSubsequence };
