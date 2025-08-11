/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @returns {number[]}
 */
function findIndices(nums, indexDifference, valueDifference) {
    let [a, b] = [0, 0];
    for (let i = indexDifference; i < nums.length; i++) {
        const j = i - indexDifference;
        if (nums[j] < nums[a]) {
            a = j;
        } else if (nums[j] > nums[b]) {
            b = j;
        }
        if (nums[i] - nums[a] >= valueDifference) {
            return [a, i];
        }
        if (nums[b] - nums[i] >= valueDifference) {
            return [b, i];
        }
    }
    return [-1, -1];
}

module.exports = {findIndices};
