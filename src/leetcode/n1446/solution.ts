export function maxPower(s: string): number {
    let mx = 0;
    for (let r = 0, l = 0; l < s.length; l = r) {
        while (r < s.length && s[r] == s[l]) {
            r++;
        }
        mx = Math.max(mx, r - l);
    }
    return mx;
}
