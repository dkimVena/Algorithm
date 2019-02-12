// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

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
  let count = {};
  let left = {};
  let right = {};
  
  for(let i=0; i<nums.length; i++) {
      let x = nums[i];
      if(left[x] === undefined) left[x] = i;
      right[x] = i;
      count[x] = count[x] + 1 || 1;
  }
  
  let ans = nums.length;
  let arr = Object.values(count);
  let degree = Math.max(...arr);
  
  for(let key in count) {
      if(count[key] === degree) {
          ans = Math.min(ans, right[key] - left[key] + 1);
      }
  }
  return ans;
};