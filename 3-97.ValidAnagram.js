// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = hashMap[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!hashMap[t[i]] || hashMap[t[i]] === 0) return false;
    hashMap[t[i]] -= 1;
  }

  return true;
};
