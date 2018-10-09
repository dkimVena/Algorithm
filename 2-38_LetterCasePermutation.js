// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  
// Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length at most 12.
// S will consist only of letters or digits.

/**
 * @param {string} S
 * @return {string[]}
 */
const permute = (soFar, rest, output) => {
  if (rest.length === 0) {
      output.add(soFar);
  } else {
      const ch = rest.charAt(0);
      
      permute(soFar + ch.toLowerCase(), rest.substr(1), output);
      permute(soFar + ch.toUpperCase(), rest.substr(1), output);
  }
}

const letterCasePermutation = (s) => {
  const output = new Set();
  permute('', s, output);
  return [...output];
}
