// We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

// Example 1:
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Note: The length of the input array will not exceed 20,000.

// https://leetcode.com/problems/longest-harmonious-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let hashMap ={};
  let max = 0;
  
  for(let i=0; i<nums.length; i++) {
      hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1;
  }
  
  Object.keys(hashMap).forEach(item => {
      max = Math.max(max, (hashMap[Number(item) - 1] + hashMap[Number(item)]) || 0);
      max = Math.max(max, (hashMap[Number(item)] + hashMap[Number(item) + 1]) || 0); 
  });
  
  return max;
};