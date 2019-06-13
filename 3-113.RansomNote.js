// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hashMap = {};
  let result = true;

  for (let i = 0; i < ransomNote.length; i++) {
    hashMap[ransomNote[i]] = hashMap[ransomNote[i]] + 1 || 1;
  }

  for (let i = 0; i < magazine.length; i++) {
    hashMap[magazine[i]] = hashMap[magazine[i]] - 1;
  }

  Object.keys(hashMap).forEach(key => {
    if (hashMap[key] > 0) result = false;
  });

  return result;
};
