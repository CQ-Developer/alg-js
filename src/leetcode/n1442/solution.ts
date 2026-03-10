export function countTripletsA(arr: number[]): number {
    const n = arr.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j; k < n; k++) {
                let a = 0;
                for (let p = i; p < j; p++) {
                    a ^= arr[p];
                }
                let b = 0;
                for (let p = j; p <= k; p++) {
                    b ^= arr[p];
                }
                if (a == b) {
                    ans++;
                }
            }
        }
    }
    return ans;
}

export function countTripletsB(arr: number[]): number {
    const n = arr.length;
    const xor = Array.from({ length: n + 1 }, () => 0);
    arr.forEach((x, i) => xor[i + 1] = xor[i] ^ x);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j; k < n; k++) {
                const a = xor[j] ^ xor[i];
                const b = xor[k + 1] ^ xor[j];
                if (a == b) {
                    ans++;
                }
            }
        }
    }
    return ans;
}

export function countTripletsC(arr: number[]): number {
    const n = arr.length;
    const xor = Array.from({ length: n + 1 }, () => 0);
    arr.forEach((x, i) => xor[i + 1] = xor[i] ^ x);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (xor[k + 1] == xor[i]) {
                ans += k - i;
            }
        }
    }
    return ans;
}

export function countTripletsD(arr: number[]): number {
    let ans = 0, xor = 0;
    const cnt = new Map<number, number>();
    const all = new Map<number, number>();
    arr.forEach((x, i) => {
        cnt.set(xor, (cnt.get(xor) ?? 0) + 1);
        all.set(xor, (all.get(xor) ?? 0) + i);
        xor ^= x;
        ans += (cnt.get(xor) ?? 0) * i - (all.get(xor) ?? 0);
    });
    return ans;
}
