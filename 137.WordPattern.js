// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter 
// in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, 
// and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map = {};
    let mapPattern = {};
    let size = pattern.length;
    let strArr = str.split(' ');
    
    if(size !== strArr.length)
        return false;
    
    for(let i=0; size>i; i++) {
        if(mapPattern[pattern.charAt(i)] === undefined && map[strArr[i]] === undefined) {
            map[strArr[i]] = pattern.charAt(i);
            mapPattern[pattern.charAt(i)] = strArr[i];
        } else if(mapPattern[pattern.charAt(i)] !== strArr[i] || map[strArr[i]] !== pattern.charAt(i)){
            return false;
        }
    }
    return true;
};