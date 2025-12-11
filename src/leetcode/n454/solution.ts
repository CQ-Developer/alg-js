type fourSumCount = (nums1: number[], nums2: number[], nums3: number[], nums4: number[]) => number;

function fourSumCountA(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let cnt = 0;
    const tab = new Map<number, number>();
    nums1.forEach(x => nums2.forEach(y => tab.set(x + y, (tab.get(x + y) ?? 0) + 1)));
    nums3.forEach(x => nums4.forEach(y => cnt += tab.get(-x - y) ?? 0));
    return cnt;
}

export { fourSumCount, fourSumCountA };
