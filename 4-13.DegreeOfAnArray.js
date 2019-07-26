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

// https://leetcode.com/problems/degree-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let map = {};
  let arr = [];
  let minLength = Number.MAX_SAFE_INTEGER;
  
  for(let i=0; i<nums.length; i++) {
      map[nums[i]] = map[nums[i]] + 1 || 1;
      if(map[nums[i]] > max) max = map[nums[i]];
  }
  
  Object.keys(map).map(key => {
      if(map[key] === max) arr.push(key);
  });
  
  arr.map(item => {
      minLength = Math.min(minLength, nums.lastIndexOf(Number(item)) - nums.indexOf(Number(item)));
  })
  
  return minLength + 1;
};