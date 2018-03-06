// In a given integer array nums, there is always exactly one largest element.
//
// Find whether the largest element in the array is at least twice as much as every other number in the array.
//
// If it is, return the index of the largest element, otherwise return -1.
//
// Example 1:
//
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
//
//
// Example 2:
//
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
//
//
// Note:
//
// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99].

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var size = nums.length;
    if(size == 1)
        return 0;

    var max;
    var secondMax;
    var maxIndex;

    if(nums[0] > nums[1]){
        max = nums[0];
        maxIndex = 0;
        secondMax = nums[1];
    }else {
        max = nums[1];
        maxIndex = 1;
        secondMax = nums[0];
    }

    if(size >= 3) {
        for(var i=2; size>i; i++) {
            if(nums[i] >= max) {
                secondMax = max;
                max = nums[i];
                maxIndex = i;
            }
            else if(nums[i] > secondMax){
                secondMax = nums[i];
            }
        }
    }
    if(max >= secondMax*2)
        return maxIndex;
    else
        return -1;



};
