// Given an integer n, return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    for(let i=5; Math.floor(n/i)>=1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
};