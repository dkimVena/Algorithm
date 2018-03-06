// Given a string and an integer k,
// you need to reverse the first k characters for every 2k characters counting from the start of the string.
// If there are less than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var result = "";
    var size = s.length;
    var arr = s.split("");
    var flag = true;
    var i = 0;
    for(i; size>i; i += k) {
        if(flag === true) {
            var arr = s.substring(i, i+k).split("").reverse().join("");
            result += arr;
            flag = false;
        } else {
            result += s.substring(i, i+k);
            flag = true;
        }
    }
    if(flag === true) {
        var arr = s.substring(i).split("").reverse().join("");
        result += arr;
    } else {
        result += s.substring(i, i+k);
    }

    return result;
};
