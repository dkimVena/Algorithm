// Write a function to find the longest common prefix string amongst an array of strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let size = strs.length;
    let result = "";

    if(size === 0) return result;
    
    result = strs[0];
    
    for(let i=0; size>i; i++) {
        let tmp = "";
        for(let j=0; result.length>j; j++) {
            if(result[j] === strs[i][j])
                tmp += result[j];
            else
                break;
        }
        
        result = tmp;
    }
    return result;
};