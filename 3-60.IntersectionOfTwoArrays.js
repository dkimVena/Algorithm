// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = [];
  let hash = {};
  
  for(let i=0; i<nums1.length; i++) {
      hash[nums1[i]] = 1;
  }
  
  for(let i=0; i<nums2.length; i++) {
      if(hash[nums2[i]] === 1) {
          result.push(nums2[i]);
          hash[nums2[i]] = 0;
      }
  }
  return result;
};