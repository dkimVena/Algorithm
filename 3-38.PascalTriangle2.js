// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [];
  
  for(let i=1; i<rowIndex+2; i++) {
      let row = [];
      for(let j=0; j<i; j++) {
          if(j === 0 || j === i-1) row.push(1);
          else {
              row.push(result[i-2][j-1] + result[i-2][j]);
          }
      }
      result.push(row);
  }
  return result[result.length-1];
};