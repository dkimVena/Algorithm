// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let size = nums.length + 1;
  let compArr = new Array(size);
  
  for(let i=0; i<size-1; i++) {
      compArr[nums[i]] = 1;
  }
  
  for(let i=0; i<size; i++) {
      if(compArr[i] === undefined) return i;
  }
};
