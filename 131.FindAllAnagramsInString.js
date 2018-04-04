// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sizeS = s.length;
    let sizeP = p.length;
    let count = [];
    let map = {};
    
    for(let i=0; sizeP>i; i++) {
        map[p[i]] = true;
    }
    
    for(let i=0; sizeS-sizeP>=i; i++) {
        if(map[s[i]] !== undefined) {
            let temp = 0;
            let sumS = 0;
            let sumP = 0;
            for(let j=0; sizeP>j; j++) {
                temp ^= s.charCodeAt(i+j) ^ p.charCodeAt(j);
                sumS += s.charCodeAt(i+j);
                sumP += p.charCodeAt(j);
            }
            
            if(temp === 0 && sumS === sumP) count.push(i);
        }
    }
    return count;
};