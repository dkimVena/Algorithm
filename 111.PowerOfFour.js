// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return Number(num).toString(4).replace(/0/g,'') === '1' ? true : false;
};