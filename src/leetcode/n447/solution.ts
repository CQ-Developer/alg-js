export function numberOfBoomerangs(points: number[][]): number {
    let ans = 0;
    for (const [x, y] of points) {
        const cnt = new Map<number, number>();
        for (const [a, b] of points) {
            const k = (a - x) ** 2 + (b - y) ** 2;
            const v = cnt.get(k) ?? 0;
            ans += v * 2;
            cnt.set(k, v + 1);
        }
    }
    return ans;
}
