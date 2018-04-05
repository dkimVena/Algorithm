// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// The brackets must close in the correct order, 
// "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let count = 0;
    let arr = [];
    
    for(let i of s) {
        if(i === '(' || i === '{' || i === '[') arr.push(i);
        else if(i === ')') {
            let temp = arr.pop();
            if(temp !== '(') return false;
        }
        else if(i === '}') {
            let temp = arr.pop();
            if(temp !== '{') return false;
        }
        else if(i === ']') {
            let temp = arr.pop();
            if(temp !== '[') return false;
        }
    }
    
    return arr.length === 0;
};