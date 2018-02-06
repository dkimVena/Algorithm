// Given an array of integers, every element appears twice except for one. Find that single one.

class Solution {
    public int singleNumber(int[] nums) {
        if(nums == null || nums.length == 0)
            return 0;
        int temp = nums[0];
        int length = nums.length;

        for(int i=1; length>i; i++) {
            temp ^= nums[i];
        }

        return temp;
    }
}
