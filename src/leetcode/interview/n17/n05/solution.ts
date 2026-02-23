export function findLongestSubarray(array: string[]): string[] {
    let pos = 0, len = 0, pre = 0;
    const cnt = new Map<number, number>();
    cnt.set(0, -1);
    array.forEach((x, i) => {
        pre += (x.codePointAt(0)! >> 6 & 1) * 2 - 1;
        const j = cnt.get(pre);
        if (j == undefined) {
            cnt.set(pre, i);
        } else {
            const n = i - j;
            if (n > len) {
                [pos, len] = [j, n];
            }
        }
    });
    return array.slice(pos + 1, pos + 1 + len);
}
