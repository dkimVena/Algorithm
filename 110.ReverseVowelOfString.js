// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = [];
    let result = "";
    let size = s.length;
    
    for(let i=0; size>i; i++) {
        if("aeiouAEIOU".includes(s[i]))
            arr.push(s[i]);
    }
    arr.reverse();
    for(let i=size-1; i>=0; i--) {
        if("aeiouAEIOU".includes(s[i])){
            result = arr.pop().concat(result);
        } else
            result = s[i] + result; 
    }
    
    return result;
};