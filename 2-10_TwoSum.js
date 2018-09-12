// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numHash = {};
  let size = nums.length;
  let result = [];
  
  for(let i=0; i<size; i++) {
      numHash[nums[i]] = i;
  }
  
  for(let i=0; i<size; i++) {
      if(numHash[target - nums[i]] !== undefined && i !== numHash[target - nums[i]]) {
          result.push(i);
          result.push(numHash[target - nums[i]]);
          break;
      }
  }
  
  return result;
};
