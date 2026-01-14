export function strStr(haystack: string, needle: string): number {
    let len = 0;
    const n = needle.length;
    const pi = Array.from({ length: n }, () => 0);
    for (let i = 1; i < n; i++) {
        while (len > 0 && needle[len] != needle[i]) {
            len = pi[len - 1];
        }
        if (needle[len] == needle[i]) {
            len++;
        }
        pi[i] = len;
    }
    len = 0;
    const m = haystack.length;
    for (let i = 0; i < m; i++) {
        while (len > 0 && needle[len] != haystack[i]) {
            len = pi[len - 1];
        }
        if (needle[len] == haystack[i]) {
            len++;
        }
        if (len == n) {
            return i - n + 1;
        }
    }
    return -1;
}
