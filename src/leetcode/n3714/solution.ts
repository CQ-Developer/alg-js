export function longestBalanced(s: string): number {
    const n = s.length;
    let ans = 0;

    // 1 letter
    for (let i = 0; i < n;) {
        let j = i++;
        while (i < n && s[i] == s[j]) {
            i++;
        }
        ans = Math.max(ans, i - j);
    }

    // 2 letters
    const f = (x: string, y: string): number => {
        let ans = 0;
        for (let i = 0; i < n; i++) {
            const map = new Map<number, number>();
            map.set(0, i - 1);
            for (let d = 0; i < n && (s[i] == x || s[i] == y); i++) {
                d += s[i] == x ? 1 : -1;
                if (map.has(d)) {
                    ans = Math.max(ans, i - map.get(d)!);
                } else {
                    map.set(d, i);
                }
            }
        }
        return ans;
    };
    ans = Math.max(ans, f('a', 'b'));
    ans = Math.max(ans, f('b', 'c'));
    ans = Math.max(ans, f('c', 'a'));

    // 3 letters
    const map = new Map<number, number>();
    map.set(n << 17 | n, -1);
    const cnt = [0, 0, 0];
    for (let i = 0; i < n; i++) {
        cnt[s.charCodeAt(i) - 97]++;
        const p = (cnt[1] - cnt[0] + n) << 17 | (cnt[2] - cnt[1] + n);
        if (map.has(p)) {
            ans = Math.max(ans, i - map.get(p)!);
        } else {
            map.set(p, i);
        }
    }

    return ans;
}
