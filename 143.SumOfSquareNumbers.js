// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:
// Input: 3
// Output: False

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i=0; i*i <= c; i++) {
        if(isSquare(c - i*i))
            return true;
    }
    return false;
};

var isSquare = function (n) {
    return n >= 0 && Math.sqrt(n) % 1 === 0;
};