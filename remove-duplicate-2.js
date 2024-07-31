var removeDuplicates = function (nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1] || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
nums = [1, 1, 1, 2, 2, 3, 3, 3, 4]
let k = removeDuplicates(nums);
console.log("Array elements:", nums.slice(0, k));