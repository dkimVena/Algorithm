// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      if (hashMap[s[i]] !== t[i]) return false;
    } else if (Object.values(hashMap).indexOf(t[i]) === -1) {
      hashMap[s[i]] = t[i];
    } else return false;
  }
  return true;
};
