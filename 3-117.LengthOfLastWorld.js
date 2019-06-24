// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let data = s.trim();

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i] !== ' ') {
      count++;
    } else {
      break;
    }
  }
  return count;
};
