// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;
  
  while(left <= right) {
      
      let mid = left + parseInt((right - left) / 2);
      if(mid === num / mid) {
          return true;
      } else if(mid > num / mid) {
          right = mid;        
      } else {
          if((mid + 1) > num / (mid + 1)) {
              return false;
          } else {
              left = mid + 1;
          }
      }
  }
};