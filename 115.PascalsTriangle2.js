// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    let prev = [];
    let cur = [];
    
    for(let i=0; rowIndex>i; i++) {
        cur = [1];
        for(let j=0; i-1>=j; j++) {
            cur.push(Number(prev[j]) + Number(prev[j+1]));
        }
        cur.push(1);
        prev = cur;
    }
    return cur;
};