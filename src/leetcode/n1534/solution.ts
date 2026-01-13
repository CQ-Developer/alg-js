export function countGoodTripletsA(arr: number[], a: number, b: number, c: number): number {
    let cnt = 0;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
}

export function countGoodTripletsB(arr: number[], a: number, b: number, c: number): number {
    const n = arr.length;
    const mx = Math.max(...arr);
    const s = Array.from({ length: mx + 2 }, () => 0);
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (Math.abs(arr[j] - arr[k]) > b) {
                continue;
            }
            const l = Math.max(arr[j] - a, arr[k] - c, 0);
            const r = Math.min(arr[j] + a, arr[k] + c, mx);
            cnt += Math.max(s[r + 1] - s[l], 0);
        }
        for (let v = arr[j] + 1; v < mx + 2; v++) {
            s[v] += 1;
        }
    }
    return cnt;
}

export function countGoodTripletsC(arr: number[], a: number, b: number, c: number): number {
    let cnt = 0;
    const idx = Array.from({ length: arr.length }, (_, i) => i).sort((i, j) => arr[i] - arr[j]);
    for (const j of idx) {
        const left  = idx.filter((i) => i < j && Math.abs(arr[i] - arr[j]) <= a).map((j) => arr[j]);
        const right = idx.filter((k) => k > j && Math.abs(arr[j] - arr[k]) <= b).map((k) => arr[k]);
        let p1 = 0, p2 = 0;
        for (const x of left) {
            while (p2 < right.length && right[p2] <= x + c) {
                p2++;
            }
            while (p1 < right.length && right[p1] < x - c) {
                p1++;
            }
            cnt += p2 - p1;
        }
    }
    return cnt;
}
