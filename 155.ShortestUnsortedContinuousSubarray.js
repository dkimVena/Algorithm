// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
// then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let size = nums.length;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let rightLoc;
    let leftLoc;
    
    for(let i=0; size>i; i++) {
        if(max <= nums[i]) {
            max = nums[i];
        } else {
            rightLoc = i;
        }    
    }
    
    for(let i=size-1; i>=0; i--) {
        if(min >= nums[i]) {
            min = nums[i];
        } else {
            leftLoc = i;
        }    
    }
    
    return (rightLoc === undefined && leftLoc === undefined) ? 0 : rightLoc - leftLoc + 1;
};