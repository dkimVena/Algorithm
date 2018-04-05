// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sizeA = a.length
    let sizeB = b.length;
    let result = "";
    let carry = 0;
    
    while(sizeA >= 1 || sizeB >= 1) {
        let tmpA = sizeA >= 1 ? a.charAt(sizeA-- - 1) - '0' : 0;
        let tmpB = sizeB >= 1 ? b.charAt(sizeB-- - 1) - '0' : 0;
        let add = tmpA + tmpB + carry;
        result = add % 2 + result.slice();
        carry = Math.floor(add / 2);
    }
    if(carry === 1)
        result = '1' + result.slice();
        
    return result;
};