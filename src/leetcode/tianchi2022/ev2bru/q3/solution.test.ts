import { arrangeBookshelf } from './solution.ts';

test.each([
    { order: [5, 5, 6, 5], limit: 2, ans: [5, 5, 6] },
    { order: [5, 5, 6, 5], limit: 3, ans: [5, 5, 6, 5] },
    { order: [3, 3, 9, 8, 9, 2, 8], limit: 1, ans: [3, 8, 9, 2] },
    { order: [2, 1, 2, 2, 1, 3, 3, 1, 3, 3], limit: 2, ans: [1, 2, 2, 1, 3, 3] }
])('arrangeBookshelf($order, $limit)', ({ order, limit, ans }) => expect(arrangeBookshelf(order, limit)).toEqual(ans));
