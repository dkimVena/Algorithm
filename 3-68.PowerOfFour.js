// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 5
// Output: false

// https://leetcode.com/problems/power-of-four/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  let n = num;
  
  while(n > 0) {
      if(n === 1) return true;
      else if(n % 4 !== 0) return false;
      n /= 4;
  }
  return false;
};