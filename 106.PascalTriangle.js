// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

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
    if(numRows == 0) return result;
    
    result[0] = [1];
    
    for(let i=1; numRows>i; i++) {
        let temp = [];
        temp.push(1);
        
        if(numRows === 1) {
            return result;
        }
        
        for(let j=0; result[i-1].length-1>j; j++) {
            temp.push(result[i-1][j] + result[i-1][j+1]);
        }
        
        temp.push(1);
        
        result.push(temp);
    }
    
    return result;
};