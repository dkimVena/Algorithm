// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
// then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let size = nums.length;
  let tmpArr = nums.slice(0);
  
  tmpArr.sort((a, b) => a - b);
  
  
  let leftIndex;
  let rightIndex;
  
  for(let i=0; i<size; i++) {
      if(tmpArr[i] !== nums[i]) {
          leftIndex = i;
          break;
      }
  }
  
  for(let i=size-1; i>=0; i--) {
      if(tmpArr[i] !== nums[i]) {
          rightIndex = i;
          break;
      }
  }
  
  if(rightIndex === undefined) return 0;
  return rightIndex - leftIndex + 1;
};