export class NumArray {

    pre: number[];

    constructor(nums: number[]) {
        const n = nums.length;
        const pre = Array.from({ length: n + 1 }, () => 0);
        for (let i = 0; i < n; i++) {
            pre[i + 1] = pre[i] + nums[i];
        }
        this.pre = pre;
    }

    sumRange(left: number, right: number): number {
        const pre = this.pre;
        return pre[right + 1] - pre[left];
    }

}
