// Given a binary array, find the maximum number of consecutive 1s in this array.
//
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0, temp = 0;

        for(int num : nums) {
            if(num == 0) {
                if(max < temp) {
                    max = temp;
                }
                temp = 0;
            } else {
                temp++;
            }
        }

        if(max < temp) {
            max = temp;
        }

        return max;
    }
}
