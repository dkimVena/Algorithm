// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  
  for(let i=1; i<numRows+1; i++) {
      let row = [];
      for(let j=0; j<i; j++) {
          if(j === 0 || j === i-1) row.push(1);
          else {
              row.push(result[i-2][j-1] + result[i-2][j]);   
          }
      }
      result.push(row);
  }
  
  return result;
};