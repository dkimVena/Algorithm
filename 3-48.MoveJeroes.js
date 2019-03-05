// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let cur = 0;
  let resultIndex = 0;
  let size = nums.length;
  
  for(let i=0; i<size; i++) {
      if(nums[i] === 0) cur++;
      else {
          nums[resultIndex] = nums[cur];
          resultIndex++;
          cur++;
      }
  }
  
  for(let i=resultIndex; i<size; i++) {
      nums[i] = 0;
  }
};
