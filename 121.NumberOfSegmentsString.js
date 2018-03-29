// Count the number of segments in a string, 
// where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    let size = s.length;
    let prev = false;
    
    for(let i=0; size>i; i++) {
        if(prev === false && s.charAt(i) !== " ") {
            count++;
            prev = true;
        } else if(prev === true && s.charAt(i) === " ") {
            prev = false;
        }
    }
    return count;
};