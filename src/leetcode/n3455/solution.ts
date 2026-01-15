function kmpSearch(s: string, p: string): number[] {
    if (!p) {
        return Array.from({ length: s.length + 1 }, (_, i) => i);
    }
    const n = p.length;
    const next = Array.from({ length: n }, () => 0);
    let j = 0;
    for (let i = 1; i < n; i++) {
        while (j > 0 && p[j] != p[i]) {
            j = next[j - 1];
        }
        if (p[j] == p[i]) {
            j++;
        }
        next[i] = j;
    }
    const m = s.length;
    const idx = [];
    j = 0;
    for (let i = 0; i < m; i++) {
        while (j > 0 && p[j] != s[i]) {
            j = next[j - 1];
        }
        if (p[j] == s[i]) {
            j++;
        }
        if (j == n) {
            idx.push(i - j + 1);
            j = next[j - 1];
        }
    }
    return idx;
}

export function shortestMatchingSubstring(s: string, p: string): number {
    const [p1, p2, p3] = p.split("*");
    const n1 = p1.length, n2 = p2.length, n3 = p3.length;
    const pos1 = kmpSearch(s, p1), pos2 = kmpSearch(s, p2), pos3 = kmpSearch(s, p3);
    const m1 = pos1.length, m3 = pos3.length;
    let ans = Infinity;
    let i = 0, k = 0;
    for (const j of pos2) {
        while (k < m3 && pos3[k] < j + n2) {
            k++;
        }
        if (k == m3) {
            break;
        }
        while (i < m1 && pos1[i] <= j - n1) {
            i++;
        }
        if (i) {
            ans = Math.min(ans, pos3[k] + n3 - pos1[i - 1]);
        }
    }
    return ans == Infinity ? -1 : ans;
}
