// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

// https://leetcode.com/problems/number-of-segments-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let count = 0;
  let on = false;
  
  for(let i=0; i<s.length; i++) {
      if(s[i] !== ' ') {
          if(!on) {
              count++;
              on = true;
          }
      } else {
          if(on) {
              on = false;
          }
      }    
  }
  return count;
};