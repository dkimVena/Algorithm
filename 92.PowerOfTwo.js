// Given an integer, write a function to determine if it is a power of two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    while(n > 2) {
        if(n % 2 != 0) return false;
        n /= 2;
    }
    return true;
};
