// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let size = digits.length;
    
    for(let i = size-1;; i--) {
        if(i === size - 1) {
            if (digits[i] + 1 < 10){
                digits[i] = digits[i] + 1;
                break;
            } else {
                digits[i] = (digits[i] + 1) % 10;
                continue;
            }    
        } else {
            if(i < 0) {
                digits = [1].concat(digits);
                break;
            } else if (digits[i] + 1 < 10){
                digits[i] = digits[i] + 1;
                break;
            } else {
                digits[i] = (digits[i] + 1) % 10;
            }
        }
    }
    return digits;
    
};