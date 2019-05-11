// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = 0;

  while (num !== 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;
  }

  if (sum < 10) return sum;
  else return addDigits(sum);
};
