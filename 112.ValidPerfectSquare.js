// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True
// Example 2:

// Input: 14
// Returns: False

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;
    let left = 0, right = Math.floor(num / 2), mid;
    
    while(left <= right) {
        mid = Math.round((left + right) / 2);
        
        if(mid * mid === num) return true;
        else if(mid * mid < num) left = mid + 1;
        else if(mid * mid > num) right = mid - 1;
    }
    return false;

};