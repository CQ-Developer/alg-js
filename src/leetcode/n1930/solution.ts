export function countPalindromicSubsequenceA(s: string): number {
    let cnt = 0;
    for (let c = 97; c < 123; c++) {
        const char = String.fromCharCode(c);
        const l = s.indexOf(char);
        if (l < 0) {
            continue;
        }
        const r = s.lastIndexOf(char);
        const used = Array.from({ length: 26 }, () => false);
        for (let i = l + 1; i < r; i++) {
            const x = s.charCodeAt(i) - 97;
            if (!used[x]) {
                cnt++;
                used[x] = true;
            }
        }
    }
    return cnt;
}

export function countPalindromicSubsequenceB(s: string): number {
    const n = s.length;
    const right = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < n; i++) {
        right[s.charCodeAt(i) - 97]++;
    }
    let cnt = 0;
    const left = Array.from({ length: 26 }, () => false);
    const used = Array.from({ length: 26 }, () => Array.from({ length: 26 }, () => false));
    for (let i = 0; i < n; i++) {
        const x = s.charCodeAt(i) - 97;
        right[x]--;
        for (let j = 0; j < 26; j++) {
            if (left[j] && right[j] > 0 && !used[x][j]) {
                used[x][j] = true;
                cnt++;
            }
        }
        left[x] = true;
    }
    return cnt;
}

export function countPalindromicSubsequenceC(s: string): number {
    const n = s.length;
    let r = 0;
    const right = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < n; i++) {
        const x = s.charCodeAt(i) - 97;
        right[x]++;
        r |= 1 << x;
    }
    let l = 0;
    const mask = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < n; i++) {
        const x = s.charCodeAt(i) - 97;
        if (--right[x] == 0) {
            r ^= 1 << x;
        }
        mask[x] |= l & r;
        l |= 1 << x;
    }
    let cnt = 0;
    for (let m of mask) {
        while (m) {
            cnt++;
            m &= (m - 1);
        }
    }
    return cnt;
}
