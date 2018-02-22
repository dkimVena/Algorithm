// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

class Solution {
    public int majorityElement(int[] nums) {
        int size = nums.length;
        int result = 0;

        HashMap<Integer, Integer> hashmap = new HashMap<Integer, Integer>();

        for(int num : nums) {
            if (hashmap.get(num) != null)
                hashmap.put(num, hashmap.get(num)+1);
            else
                hashmap.put(num, 1);
        }

        for( int key : hashmap.keySet() ){
            if (hashmap.get(key) > size/2)
                result = key;
        }
        return result;
    }
}
