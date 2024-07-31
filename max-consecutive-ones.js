/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    let maxLength = 0;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            k++;
            maxLength = Math.max(maxLength, k);
        } else {
            k = 0;
        }
    }
    return maxLength;
};
const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));

