// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  
  if(strs.length === 0) return '';
  
  for(let j=0; j<strs[0].length; j++) {
      for(let i=0; i<strs.length; i++) {
          if(strs[0][j] !== strs[i][j]) {
              return result;
          }
      }
      result += strs[0][j];
  }
  return result;
};