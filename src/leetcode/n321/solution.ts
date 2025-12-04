function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    const peekMax = (arr: number[], p: number): number[] => {
        let re = arr.length - p;
        const stack = Array<number>();
        for (const x of arr) {
            while (re > 0 && stack.length && x > stack[stack.length - 1]) {
                stack.pop();
                re--;
            }
            if (stack.length < p) {
                stack.push(x);
            } else {
                re--;
            }
        }
        return stack;
    };
    const merge = (a: number[], b: number[]): number[] => {
        const arr = Array<number>();
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (compare(a, i, b, j) > 0) {
                arr.push(a[i++]);
            } else {
                arr.push(b[j++]);
            }
        }
        while (i < a.length) {
            arr.push(a[i++]);
        }
        while (j < b.length) {
            arr.push(b[j++]);
        }
        return arr;
    };
    const compare = (a: number[], i: number, b: number[], j: number): number => {
        while (i < a.length && j < b.length) {
            if (a[i] != b[j]) {
                return a[i] - b[j];
            }
            i++;
            j++;
        }
        return (a.length - i) - (b.length - j);
    };
    let mx = Array.from({ length: k }, () => 0);
    for (let i = 0; i <= k; i++) {
        if (i <= nums1.length && k - i <= nums2.length) {
            const cur = merge(peekMax(nums1, i), peekMax(nums2, k - i));
            if (compare(cur, 0, mx, 0) > 0) {
                mx = cur;
            }
        }
    }
    return mx;
}

export { maxNumber };
