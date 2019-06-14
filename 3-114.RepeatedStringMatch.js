// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

// https://leetcode.com/problems/repeated-string-match/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let count = Math.ceil(B.length / A.length);
  let str = A.repeat(count);

  if (str.includes(B)) {
    return count;
  } else if ((str + A).includes(B)) {
    return count + 1;
  } else {
    return -1;
  }
};
