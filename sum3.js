var threeSum = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const tripletString = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).toString();
                    if (!result.some(res => res.toString() === tripletString)) {
                        result.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
    }

    return result;
};
const nums = [0, 0, 0];
console.log(threeSum(nums))