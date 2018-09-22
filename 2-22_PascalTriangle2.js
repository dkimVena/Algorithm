// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let triangle = generate(rowIndex + 1);
  return triangle[rowIndex];
};

var generate = function(numRows) {
let result = [];

if(numRows !== 0) result.push([1]);

for(let i=1; i<numRows; i++) {
    let resultRow = [];
    resultRow.push(1);
    
    for(let j=1; j<i; j++) {
        resultRow.push(result[i-1][j-1] + result[i-1][j]);
    }
    
    resultRow.push(1);
    result.push(resultRow);
}
return result;
};
