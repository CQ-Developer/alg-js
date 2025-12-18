export function longestBalancedA(s: string): number {
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        let k = 0, mx = 0;
        const cnt = new Map<string, number>();
        for (let j = i; j < n; j++) {
            if (!cnt.has(s[j])) {
                k++;
            }
            const base = (cnt.get(s[j]) ?? 0) + 1;
            cnt.set(s[j], base);
            mx = Math.max(mx, base);
            if (mx * k == j - i + 1) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }
    return ans;
}
