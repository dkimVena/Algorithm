// Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:
// Input: "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".

// Notice that some of these substrings repeat and are counted the number of times they occur.

// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
// Example 2:
// Input: "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

// https://leetcode.com/problems/count-binary-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let result = 0;
  let previousCount = 0;
  let currentCount = 1;
  let prev = s[0];
  for (let i = 1; i < s.length; i++) {
    let c = s[i];
    if (c != prev) {
      result += Math.min(currentCount, previousCount);
      previousCount = currentCount;
      currentCount = 1;
    } else {
      currentCount++;
    }
    prev = c;
  }
  result += Math.min(currentCount, previousCount);
  return result;
};
