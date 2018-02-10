// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

class Solution {
    public void moveZeroes(int[] nums) {
        int size = nums.length;
        int nonZeroCount = 0;
        int zeroCount = 0;

        for(int i=0; size>i; i++) {
            if (nums[i] == 0) {
               zeroCount++;
            } else {
                nums[nonZeroCount++] = nums[i];
            }
        }

        for(int i=nonZeroCount; size>i; i++) {
            nums[i] = 0;
        }
    }
}
