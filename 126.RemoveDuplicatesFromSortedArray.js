// Given a sorted array, 
// remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let size = nums.length;
    let prev;
    let prevIndex = 0;
    
    for(let i=0; size>i; i++) {
        if(prev === undefined) {
            prev = nums[i];
        } else if(prev !== nums[i]) {
            nums[prevIndex + 1] = nums[i];
            prev = nums[i];
            prevIndex++;
        }
    }
    return prevIndex + 1;
};