// Given a non-empty array of integers, return the third maximum number in this array. 
// If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let size = nums.length;
    
    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;
    let count = 0;
    
    for(let i=0; size>i; i++) {
        if(first === nums[i] || second === nums[i] || third === nums[i]) {
            count++;
            continue;
        }
        else if(nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        }
        else if(nums[i] > second) {
            third = second;
            second = nums[i];
        }
        else if(nums[i] > third) third = nums[i];
    }
    if(size - count < 3) return first;
    return third;
};