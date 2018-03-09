// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let maxLen = num1.length > num2.length ? num1.length : num2.length;
    maxLen++;
    let carry = 0;
    let total = '';
    for (let i = 0; i< maxLen; i++) {
        if (i === (maxLen-1) && carry === 0) {
            continue;
        }
        let pos = len1-i-1;
        let a = pos < 0? 0: (num1.charCodeAt(pos) - 48);
        pos = len2-i-1;
        let b = pos < 0? 0: (num2.charCodeAt(pos) - 48);
        let t =  a + b + carry;
        carry = Math.floor(t/10);
        total =  (t % 10) + total;
    }
    return total;
};
