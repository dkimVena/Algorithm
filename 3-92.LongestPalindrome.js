// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let hashMap = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = hashMap[s[i]] + 1 || 1;
  }

  Object.keys(hashMap).forEach(item => {
    count += Math.floor(hashMap[item] / 2);
  });

  if (count * 2 >= s.length) return count * 2;
  return count * 2 + 1;
};
