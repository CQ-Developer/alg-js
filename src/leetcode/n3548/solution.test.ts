import { canPartitionGrid, canPartitionGridA } from './solution.ts';

function register(f: canPartitionGrid) {
    describe('Equal Sum Grid Partition II', () => {
        it.each([
            { grid: [[1, 4], [2, 3]], ans: true },
            { grid: [[1, 2], [3, 4]], ans: true },
            { grid: [[1, 2, 4], [2, 3, 5]], ans: false },
            { grid: [[4, 1, 8], [3, 2, 6]], ans: false },
            { grid: [[1, 2, 4], [1, 3, 3], [1, 1, 2]], ans: true }
        ])(f.name + '($grid)', ({ grid, ans }) => {
            expect(f(grid)).toBe(ans);
        });
    });
}

register(canPartitionGridA);
