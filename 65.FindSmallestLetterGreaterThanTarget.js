// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target,
// find the smallest element in the list that is larger than the given target.
//
// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
//
// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"
//
// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"
//
// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"
//
// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"
//
// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"
//
// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"
// Note:
// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    target = (target.charCodeAt(0) - "a".charCodeAt(0)) % 26;
    var minDiff = 27;
    var result;

    letters.map(item => {
        var diff = (item.charCodeAt(0) - "a".charCodeAt(0)) % 26 - target;
        if(diff > 0 && diff < minDiff) {
            minDiff=diff;
            result = item;
        }
    });

    return result || letters[0];
};
