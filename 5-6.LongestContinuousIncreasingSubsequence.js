// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
// Note: Length of the array will not exceed 10,000.

// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxLen = 0;
    let max = 0;
    let prev;
    
    for(let i=0; i<nums.length; i++) {
        if(prev === undefined || nums[i] > prev) {
            maxLen++;
            prev = nums[i];
            max = Math.max(max, maxLen);
        } else {
            maxLen = 1;
            prev = nums[i];
        }
    }
    
    return max;
};