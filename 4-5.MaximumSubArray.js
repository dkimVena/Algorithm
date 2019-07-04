// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = Number.MIN_SAFE_INTEGER;
  let maxSum = Number.MIN_SAFE_INTEGER;
  
  for(let i=0; i<nums.length; i++) {
      if(sum + nums[i] < nums[i]) {
          sum = nums[i];
      } else {
          sum += nums[i];
      }
      maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};