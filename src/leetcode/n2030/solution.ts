function smallestSubsequence(s: string, k: number, letter: string, repetition: number): string {
    let left = 0, inside = 0;
    for (const c of s) {
        if (c == letter) {
            left++;
        }
    }

    let len = 0;
    const stk = Array<string>(k);

    const n = s.length;
    for (let i = 0; i < n; i++) {
        const x = s.charAt(i);
        while (len > 0 && stk[len - 1] > x && len + n - i > k && (stk[len - 1] != letter || inside + left > repetition) || inside + k - len < repetition) {
            if (stk[--len] == letter) {
                inside--;
            }
        }
        if (len < k) {
            stk[len++] = x;
            if (x == letter) {
                inside++;
            }
        }
        if (x == letter) {
            left--;
        }
    }

    return stk.join('');
}

export { smallestSubsequence };
