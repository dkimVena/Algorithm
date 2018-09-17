// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? 
// You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let size = nums.length + 1;
  let checkArr = new Array(size);
  let result = [];
  
  for(let i=0; i<size; i++) {
      checkArr[nums[i]] = 1;
  }

  for(let i=1; i<size; i++) {
      if(checkArr[i] === undefined) result.push(i);
  }
  
  return result;
};