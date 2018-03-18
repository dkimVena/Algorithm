// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let size = nums.length;
    let sum = nums[0];
    let max = nums[0];
    
    for(let i=1; size>i; i++) {
        sum = Math.max(sum+nums[i], nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};