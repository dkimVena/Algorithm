// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, 
// return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let size = nums.length;
  let firstMax = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  let thirdMax = Number.NEGATIVE_INFINITY;
  
  for(let i=0; i<size; i++) {
      if(nums[i] >= firstMax) {
          if(nums[i] !== firstMax) {
              let firstTmp = firstMax;
              let secondTmp = secondMax;
              firstMax = nums[i];
              secondMax = firstTmp;
              thirdMax = secondTmp;    
          }
      } else if(nums[i] >= secondMax) {
          if(nums[i] !== secondMax) {
              let secondTmp = secondMax;
              secondMax = nums[i];
              thirdMax = secondTmp;    
          }
      } else if(nums[i] >= thirdMax) {
          if(nums[i] !== thirdMax)
              thirdMax = nums[i];
      }
  }

  if(firstMax === -Infinity || secondMax === -Infinity || thirdMax === -Infinity) return firstMax;
  return thirdMax;
};