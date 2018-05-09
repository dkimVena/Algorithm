// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. 
// More specifically, if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

// Example :
// Input: 
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 

// Note:

// S has length at most 26, and no character is repeated in S.
// T has length at most 200.
// S and T consist of lowercase letters only.

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let arr = new Array(26);
    let result = T[0];
    arr.fill(-1);
    
    for(let i=0; S.length>i; i++) {
        arr[S[i].charCodeAt() - 97] = i;
    }

    for(let i=1; T.length>i; i++) {
        let found = false;
        
        for(let j=0; result.length>j; j++) {
            if(arr[result[j].charCodeAt() - 97] >= arr[T[i].charCodeAt() - 97]) {   
                result = result.slice(0, j) + T[i] + result.slice(j);
                found = true;
                break;
            }
        }
        
        if(!found) result = result + T[i];
    }
    
    return result;
};