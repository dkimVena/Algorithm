// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (n>0 && Math.pow(3, 19) % n == 0);
};
