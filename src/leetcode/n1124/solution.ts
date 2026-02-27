export function longestWPI_A(hours: number[]): number {
    const stk = [0], pre = [0];
    hours.forEach((x, i) => {
        pre[i + 1] = pre[i] + (x > 8 ? 1 : -1);
        if (pre[i + 1] < pre[stk[stk.length - 1]]) {
            stk.push(i + 1);
        }
    });
    let ans = 0;
    for (let i = hours.length; i > 0; i--) {
        while (stk.length && pre[i] > pre[stk[stk.length - 1]]) {
            ans = Math.max(ans, i - stk.pop()!);
        }
    }
    return ans;
}

export function longestWPI_B(hours: number[]): number {
    let pre = 0, ans = 0;
    const hash = new Map([[0, -1]]);
    hours.forEach((x, i) => {
        pre += x > 8 ? 1 : -1;
        if (pre > 0) {
            ans = i + 1;
        } else {
            const j = hash.get(pre - 1);
            if (j != undefined) {
                ans = Math.max(ans, i - j);
            }
            if (!hash.has(pre)) {
                hash.set(pre, i);
            }
        }
    });
    return ans;
}

export function longestWPI_C(hours: number[]): number {
    const pos = [0];
    let ans = 0, pre = 0;
    for (let i = 0; i < hours.length; i++) {
        pre -= hours[i] > 8 ? 1 : -1;
        if (pre < 0) {
            ans = i + 1;
        } else {
            if (pos[pre + 1]) {
                ans = Math.max(ans, i + 1 - pos[pre + 1]);
            }
            if (pos[pre] == undefined) {
                pos[pre] = i + 1;
            }
        }
    }
    return ans;
}
