// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let hashMap = {};
  let result;

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1;
  }
  Object.keys(hashMap).forEach(key => {
    if (hashMap[key] > Math.floor(nums.length / 2)) {
      result = key;
    }
  });

  return result;
};
