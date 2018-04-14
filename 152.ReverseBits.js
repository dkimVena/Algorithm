// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
// return 964176192 (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let tmp = Number(n).toString(2);
    let size = tmp.length;
    let tmpStr = "";
    
    for(let i=size-1; i>=0; i--) {
        tmpStr += tmp[i];
    }
    
    for(let i=0; 32-size>i; i++) {
        tmpStr += "0";
    }
    
    return Number(parseInt(tmpStr, 2).toString(10));
};