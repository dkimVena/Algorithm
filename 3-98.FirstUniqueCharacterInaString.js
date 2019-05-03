// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hashMap = {};
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = hashMap[s[i]] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === 1) {
      result = i;
      break;
    }
  }
  return result;
};
