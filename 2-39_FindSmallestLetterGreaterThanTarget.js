// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, 
// find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"
// Note:
// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let size = letters.length;
  let diff = Number.POSITIVE_INFINITY;
  let found;
  let min = Number.POSITIVE_INFINITY;
  let minVal;
  
  for(let i=0; i<size; i++) {
      if(letters[i].charCodeAt(0) > target.charCodeAt(0) && (letters[i].charCodeAt(0) - target.charCodeAt(0)) < diff) {
          diff = letters[i].charCodeAt(0) - target.charCodeAt(0);
          found = letters[i];
      }    
  }
  
  if(found === undefined) {
      for(let i=0; i<size; i++) {
          if(min > letters[i].charCodeAt(0)) {
              min = letters[i].charCodeAt(0);
              minVal = letters[i];
          }    
      }
      return minVal;
  } else return found;
};
