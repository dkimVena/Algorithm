// Given a non-empty array of non-negative integers nums, 
// the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, 
// that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let size = nums.length;
  let max = Number.NEGATIVE_INFINITY;
  let len = Number.POSITIVE_INFINITY;
  let hash = {};
  
  for(let i=0; i<size; i++) {
      if(hash[nums[i]] === undefined) hash[nums[i]] = 1;
      else hash[nums[i]] += 1;
  }
  
  for(let key in hash) {
      if(max < hash[key]) {
          max = hash[key];
          len = nums.lastIndexOf(parseInt(key)) - nums.indexOf(parseInt(key)) + 1;
      } else if(max === hash[key]) {
          let tmpLen = nums.lastIndexOf(parseInt(key)) - nums.indexOf(parseInt(key)) + 1;
          if(len > tmpLen) {
              max = hash[key];
              len = tmpLen;    
          }
      }
  }

  return len;
};