function arrangeBookshelf(order: number[], limit: number): number[] {
    const n = Math.max(...order);
    const remaining = Array.from({ length: n + 1 }, () => 0);
    for (const v of order) {
        remaining[v]++;
    }
    const stack: number[] = [];
    const inside = Array.from({ length: n + 1 }, () => 0);
    for (const v of order) {
        remaining[v]--;
        if (inside[v] == limit) {
            continue;
        }
        while (stack.length && v < stack[stack.length - 1] && inside[stack[stack.length - 1]] + remaining[stack[stack.length - 1]] > limit) {
            inside[stack.pop()!]--;
        }
        stack.push(v);
        inside[v]++;
    }
    return stack;
}

export { arrangeBookshelf };
