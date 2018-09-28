// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
// Example 2:
// Input: [1,2,3,4]
// Output: 24
// Note:
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let size = nums.length;
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;
  let negative_first = Number.POSITIVE_INFINITY;
  let negative_second = Number.POSITIVE_INFINITY;
  
  for(let i=0; i<size; i++) {
      if(negative_first >= nums[i]) {
          let secondTmp = negative_first;
          negative_first = nums[i];
          negative_second = secondTmp;
      } else if(negative_second >= nums[i]) {
          negative_second = nums[i];
      }
      
      if(first <= nums[i]) {
          let secondTmp = first;
          let thirdTmp = second;
          first = nums[i];
          second = secondTmp;
          third = thirdTmp;
      } else if(second <= nums[i]) {
          let thirdTmp = second;
          second = nums[i];
          third = thirdTmp;
      } else if(third < nums[i]) {
          third = nums[i];
      }
  }
  
  return Math.max(first * second * third, first * negative_first * negative_second);
};
