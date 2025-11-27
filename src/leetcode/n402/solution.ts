export { Solution, SolutionA };

interface Solution {

    removeKdigits(num: string, k: number): string;

}

class SolutionA implements Solution {

    removeKdigits(num: string, k: number): string {
        let stk: string[] = [];
        for (const x of num) {
            while (k > 0 && stk.length && x < stk[stk.length - 1]) {
                stk.pop();
                k--;
            }
            stk.push(x);
        }
        if (k) {
            stk.length -= k
        }
        const n = stk.length;
        let i = 0;
        while (i < n && stk[i] == '0') {
            i++;
        }
        return stk.slice(i, n).join('') || '0';
    }

}
