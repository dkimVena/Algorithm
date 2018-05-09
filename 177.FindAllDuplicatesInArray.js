// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    
    for(let i = 0; nums.length > i; i++) {
        let cur = Math.abs(nums[i]);
        if(nums[cur - 1] > 0) {
            nums[cur - 1] = -nums[cur - 1];
        } else result.push(cur);
    }
    
    return result;
};