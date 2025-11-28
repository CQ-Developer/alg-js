export { Solution, SolutionA };

interface Solution {

    mostCompetitive(nums: number[], k: number): number[];

}

class SolutionA implements Solution {

    mostCompetitive(nums: number[], k: number): number[] {
        const stk: number[] = [];
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            const x = nums[i];
            while (stk.length && stk[stk.length - 1] > x && stk.length + n - i > k) {
                stk.pop();
            }
            if (stk.length < k) {
                stk.push(x);
            }
        }
        return stk;
    }

}
