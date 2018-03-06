// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
//
// You need to return whether the student could be rewarded according to his attendance record.
//
// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var l = 0;
    var a = 0;
    var size = s.length;
    var prev = 0;

    for(var i =0; size>i; i++) {
        if(s.charAt(i) == 'L') {
            l += 1;
            prev++;
        }
        else if(s.charAt(i) == 'A') {
            a += 1;
            prev=0;
        }
        else
            prev=0;

        if(prev>2)
            return false;
        if(a == 2)
            return false;
    }
    return true;
};
