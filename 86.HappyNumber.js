// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer,
// replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 19 is a happy number
//
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var set = new Set();
    while(true) {
        if(n == 1) return true;
        else if(set.has(n)) return false;
        set.add(n);
        var tmpNum = n;
        var returnNum = 0;
        while(tmpNum > 0) {
            returnNum += Math.pow(tmpNum % 10, 2);
            tmpNum = parseInt(tmpNum/10);
        }
        n = returnNum;
    }
};
