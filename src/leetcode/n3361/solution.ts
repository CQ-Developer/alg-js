export function shiftDistance(s: string, t: string, nextCost: number[], previousCost: number[]): number {
    const nc = [0], pc = [0];
    for (let i = 0; i < 26 * 2; i++) {
        nc[i + 1] = nc[i] + nextCost[i % 26];
        pc[i + 1] = pc[i] + previousCost[i % 26];
    }
    let dst = 0;
    for (let i = 0; i < s.length; i++) {
        const x = s.codePointAt(i)! - 97, y = t.codePointAt(i)! - 97;
        dst += Math.min(nc[y < x ? y + 26 : y] - nc[x], pc[x < y ? x + 27 : x + 1] - pc[y + 1]);
    }
    return dst;
}
