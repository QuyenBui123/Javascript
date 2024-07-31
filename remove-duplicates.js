var removeDuplicates = function (nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
let nums = [1, 1, 1, 2];
let k = removeDuplicates(nums);
console.log("nums:", nums.slice(0, k));
