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

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    
    for(let i=1; numRows>=i; i++) {
        let temp = [];
        for(let j=0; i>j; j++) {
            if(j === 0) temp.push(1);
            else if(i-1 === j) temp.push(1);
            else {
                temp.push(result[i-2][j-1] + result[i-2][j]);   
            }
        }
        result.push(temp);
    }
    
    return result;
}